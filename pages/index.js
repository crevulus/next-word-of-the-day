import React, { Component } from "react";

import { connect } from "react-redux";

import { addAccessToken } from "../redux/actions/accessTokenActions";

import Link from "next/link";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Layout from "../components/Layout";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      accessToken: "",
    };
  }

  enterSearch = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <Layout>
        <h1>Welcome to the Pop Culture Dictionary</h1>
        <h3>
          This is a place for English learners to get dictionary definitions{" "}
          <em>and</em> see how those words are used in real life.
        </h3>
        <h3>Here's how it works:</h3>
        <ol>
          <li>Search for a word below.</li>
          <li>See the meaning, examples, and similar words.</li>
          <li>
            Get a Spotify recommendation based on that word and see how it is
            used in music.
          </li>
          <li>
            Read the latest tweets using that word and see how native English
            speakers are using it.
          </li>
        </ol>
        <form>
          <TextField
            id="standard-basic"
            label="Search for a word..."
            type="text"
            value={this.state.searchTerm}
            onChange={this.enterSearch}
          />
          <Link href={`/definition/${this.state.searchTerm}`}>
            <Button type="submit" variant="contained" color="secondary">
              Search
            </Button>
          </Link>
        </form>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
});

const mapActionsToProps = { addAccessToken };

export default connect(mapStateToProps, mapActionsToProps)(Home);
