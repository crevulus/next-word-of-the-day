import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter } from "next/router";
import Head from "next/head";

class Definition extends Component {
  constructor({ router }, ...props) {
    super(props);
  }

  render() {
    if (this.props.router.isFallback) {
      return <h4>Loading...</h4>;
    }

    return (
      <div>
        <Head>
          <title>Musical Dictionary | {this.props.searchTerm}</title>
        </Head>
        <h3>this is where the definition will go</h3>
        <ul>
          {this.props.wordsData.definitions.map((obj, i) => (
            <li key={i}>{obj.definition}</li>
          ))}
        </ul>
        <iframe
          src={`https://open.spotify.com/embed/track/${this.props.songsData[0].id}`}
          width="300"
          height="380"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
});

export default connect(mapStateToProps, null)(withRouter(Definition));

export async function getStaticProps(context) {
  const wordsRes = await fetch(
    `https://wordsapiv1.p.rapidapi.com/words/${context.params.word}/definitions`,
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
  const songsRes = await fetch(
    `https://api.spotify.com/v1/search?q=${context.params.word}&type=track`,
    {
      method: "GET",
      headers: {
        authorization:
          "Bearer " + process.env.NEXT_PUBLIC_ENV_SPOTIFY_ACCESS_TOKEN,
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
    if (obj.explicit === true) {
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
