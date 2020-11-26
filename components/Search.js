import React, { Component } from "react";

import Link from "next/link";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class Search extends Component {
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
      <div>
        <form>
          <TextField
            style={{ textShadow: "none" }}
            id="outlined-secondary"
            variant="outlined"
            label="Search for a word..."
            type="text"
            value={this.state.searchTerm}
            onChange={this.enterSearch}
            color="secondary"
          />
          <Link href={`/definition/${this.state.searchTerm}`}>
            <Button
              style={{ color: "white" }}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Search
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}
