import React, { Component } from "react";

import Fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout>
          <h1>Welcome to Next</h1>
          {this.props.data.definitions.map((obj) => (
            <p>{obj.definition}</p>
          ))}
        </Layout>
      </div>
    );
  }
}

export default Home;
export async function getStaticProps() {
  const res = await fetch(
    "https://wordsapiv1.p.rapidapi.com/words/incredible/definitions",
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
