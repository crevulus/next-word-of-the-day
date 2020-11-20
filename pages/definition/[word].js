import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter } from "next/router";
import Head from "next/head";

import Layout from "../../components/Layout";
import SimpleCard from "../../components/SimpleCard";

import styles from "../styles/definitions.module.scss";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UrbanCard from "../../components/UrbanCard";

class Definition extends Component {
  constructor({ router }, ...props) {
    super({ router }, ...props);
  }

  render() {
    if (this.props.router.isFallback) {
      return <h4>Loading...</h4>;
    }

    const wordCards = this.props.wordsData.results.map((obj, i) => (
      <SimpleCard
        definition={obj.definition}
        category={obj.partOfSpeech}
        synonyms={obj.synonyms}
        examples={obj.examples}
        key={i}
      />
    ));

    const urbanCards = this.props.dirtyWordsData.list.map((obj, i) => (
      <UrbanCard
        definition={obj.definition}
        example={obj.example}
        permalink={obj.permalink}
        audioClip={obj.sound_urls[0]}
        key={i}
      />
    ));

    return (
      <Layout>
        <Head>
          <title>Pop Culture Dictionary | {this.props.searchTerm}</title>
          <meta name="twitter:card" content="summary"></meta>
        </Head>
        <div className={styles.pageContainer}>
          <Typography variant="h1" gutterBottom>
            {this.props.searchTerm}
          </Typography>
          <div className={styles.contentsContainer}>
            <div className={styles.definitionsContainer}>
              <Typography variant="h4" gutterBottom>
                Definitions
              </Typography>
              <Grid
                container
                spacing={2}
                className="cards-container"
                direction="column"
              >
                <Typography variant="h5" gutterBottom>
                  Standard Dictionary
                </Typography>
                {wordCards}
                <Typography variant="h5" gutterBottom>
                  Urban Dictionary
                </Typography>
                {urbanCards}
              </Grid>
            </div>
            <div className={styles.cultureContainer}>
              <iframe
                src={`https://open.spotify.com/embed/track/${this.props.songsData[0].id}`}
                width="300"
                height="380"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
              <div
                dangerouslySetInnerHTML={{ __html: this.props.tweetsData.html }}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
});

export default connect(mapStateToProps, null)(withRouter(Definition));

export async function getStaticProps(context) {
  // wordsAPI
  const wordsRes = await fetch(
    `https://wordsapiv1.p.rapidapi.com/words/${context.params.word}/`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_DB_KEY,
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
  const wordsData = await wordsRes.json();

  // Spotify API
  let fetchedToken = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      authorization: "Basic " + process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
  fetchedToken = await fetchedToken.json();
  const accessToken = fetchedToken.access_token;

  const songsRes = await fetch(
    `https://api.spotify.com/v1/search?q=${context.params.word}&type=track`,
    {
      method: "GET",
      headers: {
        authorization: "Bearer " + accessToken,
      },
    }
  )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
  const songsJSON = await songsRes.json();
  const filteredSongsArray = [];
  songsJSON.tracks.items.map((obj) => {
    const songTitle = obj.name.toLowerCase();
    const searchTerm = context.params.word.toLowerCase();
    const songRegex = new RegExp("\\b" + searchTerm + "\\b", "g");
    const regexTest = songRegex.test(songTitle);
    if (obj.explicit === true || regexTest === false) {
      return;
    } else {
      filteredSongsArray.push(obj);
      return;
    }
  });

  // Twitter API
  const twitterSearchRes = await fetch(
    `https://api.twitter.com/1.1/search/tweets.json?q=${context.params.word}&lang=en&result_type=popular&count=3`,
    {
      method: "GET",
      headers: {
        authorization:
          "Bearer " + process.env.NEXT_PUBLIC_TWITTER_API_BEARER_TOKEN,
      },
    }
  )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
  const twitterSearchData = await twitterSearchRes.json();

  let tweetIDs = twitterSearchData.statuses[0].id_str;

  const tweetsRes = await fetch(
    `https://publish.twitter.com/oembed?url=https://twitter.com/test/status/${tweetIDs}&conversation=none&theme=dark`,
    {
      method: "GET",
      headers: {
        authorization:
          "Bearer " + process.env.NEXT_PUBLIC_TWITTER_API_BEARER_TOKEN,
      },
    }
  )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
  const tweetsData = await tweetsRes.json();

  // Urban Dictionary API
  const dirtyWordsRes = await fetch(
    `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${context.params.word}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_DB_KEY,
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
  const dirtyWordsData = await dirtyWordsRes.json();

  return {
    props: {
      wordsData,
      songsData: filteredSongsArray,
      tweetsData,
      dirtyWordsData,
      searchTerm: context.params.word,
    },
    revalidate: 604800,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { word: "incredible" } }],
    fallback: true,
  };
}
