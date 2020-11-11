import React, { Component } from "react";

import Head from "next/head";

export class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>Word of the Day</title>
        </Head>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
