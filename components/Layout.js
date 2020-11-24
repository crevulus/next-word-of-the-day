import React, { Component } from "react";

import Head from "next/head";

import NavBar from "./NavBar";

import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";

export class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>
              English Culture Dictionary: How are words REALLY used?
            </title>
          </Head>
          <NavBar />
          {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
