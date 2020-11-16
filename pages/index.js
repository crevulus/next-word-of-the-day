import React, { Component } from "react";

import Link from "next/link";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Layout from "../components/Layout";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  enterSearch = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
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
            <Button variant="contained" color="secondary">
              Search
            </Button>
          </Link>
        </form>
      </Layout>
    );
  }
}

export default Home;
