import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter } from "next/router";
import Head from "next/head";

import Layout from "../../components/Layout";
import SimpleCard from "../../components/SimpleCard";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class Definition extends Component {
  constructor({ router }, ...props) {
    super(props);
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
        key={i}
      />
    ));

    return (
      <Layout>
        <Head>
          <title>Musical Dictionary | {this.props.searchTerm}</title>
        </Head>

        <Container>
          <div className="header-container">
            <Typography variant="h1" gutterBottom>
              {this.props.searchTerm}
            </Typography>
            <iframe
              src={`https://open.spotify.com/embed/track/${this.props.songsData[0].id}`}
              width="300"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <Grid
            container
            spacing={2}
            className="cards-container"
            direction="column"
            alignItems="center"
          >
            {wordCards}
          </Grid>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
});

export default connect(mapStateToProps, null)(withRouter(Definition));

export async function getStaticProps(context) {
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

  const wordsData = await wordsRes.json();
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
  return {
    props: {
      wordsData,
      songsData: filteredSongsArray,
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
