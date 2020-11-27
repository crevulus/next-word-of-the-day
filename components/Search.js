import React, { Component } from "react";

import { connect } from "react-redux";
import { toggleSearching, addSearchTerm } from "../redux/actions/searchActions";

import Link from "next/link";

import styles from "../pages/styles/search.module.scss";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

export class Search extends Component {
  constructor(props) {
    super(props);
  }

  enterSearch = (e) => {
    e.preventDefault();
    this.props.addSearchTerm(e.target.value);
  };

  // searching = () => {
  //   this.props.toggleSearching(!this.props.search.searching);
  // };

  render() {
    return (
      <div className={styles.searchContainer}>
        <form>
          <div className={styles.searchBox}>
            <TextField
              id="outlined-secondary"
              variant="outlined"
              label="Search for a word..."
              type="text"
              value={this.props.search.value}
              onChange={this.enterSearch}
              color="secondary"
              fullWidth
            />
          </div>
          <Link href={`/definition/${this.props.search.value}`}>
            <Button
              className={styles.searchButton}
              type="submit"
              variant="contained"
              color="secondary"
              // onClick={this.searching}
            >
              {this.props.search.searching ? <HourglassEmptyIcon /> : "Search"}
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapActionsToProps = { toggleSearching, addSearchTerm };

export default connect(mapStateToProps, mapActionsToProps)(Search);
