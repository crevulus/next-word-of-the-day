import React, { Component } from "react";

import store from "../../redux/store";
const reduxStore = store.getState();
import { connect } from "react-redux";
import { toggleSearching } from "../../redux/actions/searchActions";

import { Tweet } from "react-twitter-widgets";

import { withRouter } from "next/router";
import Head from "next/head";

import Layout from "../../components/Layout";
import SimpleCard from "../../components/SimpleCard";
import UrbanCard from "../../components/UrbanCard";

import styles from "../styles/definitions.module.scss";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

class Definition extends Component {
  constructor({ router }, ...props) {
    super({ router }, ...props);
    this.state = {
      urban: false,
    };
  }

  render() {
    if (this.props.router.isFallback) {
      return <h4>Loading...</h4>;
    }

    let wordCards;
    let urbanCards;

    if (this.props.wordsData) {
      wordCards = this.props.wordsData.results.map((obj, i) => (
        <SimpleCard
          definition={obj.definition}
          category={obj.partOfSpeech}
          synonyms={obj.synonyms}
          examples={obj.examples}
          key={i}
        />
      ));
    }

    if (this.props.dirtyWordsData) {
      urbanCards = this.props.dirtyWordsData.list.map((obj, i) => (
        <UrbanCard
          definition={obj.definition}
          example={obj.example}
          permalink={obj.permalink}
          audioClip={obj.sound_urls[0]}
          key={i}
        />
      ));
    }

    return (
      <Layout>
        <Head>
          <title>{this.props.searchTerm} | English Vocabulary In Use</title>
          <meta name="twitter:card" content="summary"></meta>
        </Head>
        <div className={styles.pageContainer}>
          <Typography
            className={styles.headerContainer}
            variant="h1"
            gutterBottom
          >
            {this.props.searchTerm}
            <a href="#cultureContainer">
              <Button
                color="secondary"
                variant="contained"
                className={styles.bookmarkBtn}
              >
                <TwitterIcon />
                <MusicNoteIcon />
                <ArrowDownwardIcon />
              </Button>
            </a>
          </Typography>
          <div className={styles.contentsContainer}>
            <div className={styles.definitionsContainer}>
              <Typography variant="h4" gutterBottom>
                Definitions
              </Typography>
              <Typography variant="h5" gutterBottom>
                Standard Dictionary
              </Typography>
              <Grid
                container
                spacing={2}
                className={styles.cardsContainer}
                direction="column"
              >
                {this.props.wordsData ? (
                  wordCards
                ) : (
                  <SimpleCard definition="There are no dictionary results for this word." />
                )}
              </Grid>
              <Typography variant="h5" gutterBottom>
                Urban Dictionary
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => this.setState({ urban: !this.state.urban })}
              >
                {this.state.urban
                  ? "Hide Urban Dictionary Results"
                  : "Show Urban dictionary Results"}
              </Button>
              {this.state.urban ? (
                <Grid
                  container
                  spacing={2}
                  className="twitter-tweet"
                  direction="column"
                >
                  {this.props.dirtyWordsData ? (
                    urbanCards
                  ) : (
                    <SimpleCard definition="There are no dictionary results for this word." />
                  )}
                </Grid>
              ) : null}
            </div>
            <div className={styles.damnTitle}>
              <Typography variant="h4" gutterBottom>
                Pop Culture
              </Typography>
              <div id="cultureContainer" className={styles.cultureContainer}>
                <Typography variant="h5" gutterBottom>
                  Spotify
                </Typography>
                <div className={styles.spotify}>
                  <iframe
                    src={`https://open.spotify.com/embed/track/${this.props.songsData[0].id}`}
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                <Typography variant="h5" gutterBottom>
                  Twitter
                </Typography>
                <div className="tweets">
                  <Tweet
                    tweetId={this.props.tweetID0}
                    options={{ lang: "en", theme: "dark" }}
                  />
                  <Tweet
                    tweetId={this.props.tweetID1}
                    options={{ lang: "en", theme: "dark" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
  search: state.search,
});

const mapActionsToProps = { toggleSearching };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(Definition));

export async function getStaticProps(context) {
  // wordsAPI
  const wordsRes = await fetch(
    `https://wordsapiv1.p.rapidapi.com/words/${context.params.word.replace(
      /#(.*)/,
      ""
    )}/`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_DB_KEY,
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      },
    }
  )
    .then(async (response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });

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
    `https://api.spotify.com/v1/search?q=${context.params.word.replace(
      /#(.*)/,
      ""
    )}&type=track`,
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
    if (reduxStore.choices.explicit === false) {
      if (obj.explicit === true || regexTest === false) {
        return;
      } else {
        filteredSongsArray.push(obj);
        return;
      }
    } else if (reduxStore.choices.explicit === true) {
      if (regexTest === false) {
        return;
      } else {
        filteredSongsArray.push(obj);
        return;
      }
    }
  });

  // console.log(context);

  // Twitter API
  const twitterSearchRes = await fetch(
    `https://api.twitter.com/1.1/search/tweets.json?q=${context.params.word.replace(
      /#(.*)/,
      ""
    )}&lang=en&result_type=popular&count=3`,
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
  let twitterSearchData = await twitterSearchRes.json();

  if (
    twitterSearchData.statuses[0] === undefined ||
    twitterSearchData.statuses[1] === undefined
  ) {
    const backupTwitterSearchRes = await fetch(
      `https://api.twitter.com/1.1/search/tweets.json?q=${context.params.word.replace(
        /#(.*)/,
        ""
      )}&lang=en&count=3`,
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
    twitterSearchData = await backupTwitterSearchRes.json();
  }

  let tweetID0 = twitterSearchData.statuses[0].id_str;
  let tweetID1 = twitterSearchData.statuses[1].id_str;

  // const tweetsRes = await fetch(
  //   `https://publish.twitter.com/oembed?url=https://twitter.com/test/status/${tweetID}&conversation=none&theme=dark`,
  //   {
  //     method: "GET",
  //     headers: {
  //       authorization:
  //         "Bearer " + process.env.NEXT_PUBLIC_TWITTER_API_BEARER_TOKEN,
  //     },
  //   }
  // )
  //   .then((response) => {
  //     return response;
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // const tweetsData = await tweetsRes.json();

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

  let wordsData = await wordsRes.json();

  if (!wordsData.results) {
    wordsData = null;
  }

  let dirtyWordsData = await dirtyWordsRes.json();

  if (!dirtyWordsData.list) {
    dirtyWordsData = null;
  }

  return {
    props: {
      wordsData,
      songsData: filteredSongsArray,
      tweetID0,
      tweetID1,
      dirtyWordsData,
      searchTerm: context.params.word,
    },
    revalidate: 604800,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { word: "help" } }],
    fallback: true,
  };
}
