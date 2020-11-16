import React, { Component } from "react";

import Head from "next/head";

import NavBar from "./NavBar";

export class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>Musical Dictionary</title>
        </Head>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
