import React, { Component } from "react";

import Link from "next/link";
import Head from "next/head";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  enterSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div>
        <Head>
          <title>Cool title</title>
        </Head>
        <h1>Welcome to Next</h1>
        <form>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.enterSearch}
          />
          <Link href={`/definition/${this.state.searchTerm}`}>
            <button type="submit">Search!</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Home;
