import React, { Component } from "react";

import { withRouter } from "next/router";

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
        <h3>this is where the definition will go</h3>
        <ul>
          {this.props.wordsData.definitions.map((obj, i) => (
            <li key={i}>{obj.definition}</li>
          ))}
        </ul>
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
  }
}

export default withRouter(Definition);

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
        authorization: "Bearer " + process.env.NEXT_PUBLIC_SPOTIFY_ACCESS_TOKEN,
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
  const songsData = await songsRes.json();
  return {
    props: {
      wordsData,
      songsData,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { word: "incredible" } }],
    fallback: true,
  };
}
