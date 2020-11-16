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

  runSearch = async () => {
    const fetchedToken = await fetch("https://accounts.spotify.com/api/token", {
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
    const accessToken = await fetchedToken.json();
    this.props.addAccessToken(accessToken);
  };

  render() {
    return (
      <Layout>
        <h1>Welcome to Next</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Search for words..."
            type="text"
            value={this.state.searchTerm}
            onChange={this.enterSearch}
          />
          <Link href={`/definition/${this.state.searchTerm}`}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={this.runSearch}
            >
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
