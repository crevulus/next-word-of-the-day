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
          {this.props.data.definitions.map((obj) => (
            <li>{obj.definition}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Definition);

export async function getStaticProps(context) {
  const res = await fetch(
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
  console.log(res);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { word: "incredible" } }],
    fallback: true,
  };
}
