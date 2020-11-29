import React, { Component } from "react";

import { connect } from "react-redux";

import { addAccessToken } from "../redux/actions/accessTokenActions";

import ReactGA from "react-ga";
import Cookies from "js-cookie";
import CookieConsent from "react-cookie-consent";

import Layout from "../components/Layout";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      accessToken: "",
      cookieConsent: Cookies.get("CookieConsent"),
    };
  }

  setTrackingCookies = () => {
    Cookies.set("CookieConsent", "true");
    Cookies.set("CookieConsent-legacy", "true");
    ReactGA.initialize("UA-169238413-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  enterSearch = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <Layout>
        <CookieConsent
          style={{ alignItems: "center" }}
          enableDeclineButton
          onAccept={() => [this.setTrackingCookies()]}
          onDecline={() => {
            this.showModal("cookieModalShow");
          }}
          buttonText="Accept"
          buttonStyle={{ backgroundColor: "#009785", color: "white" }}
          declineButtonText="Reject"
          declineButtonStyle={{
            backgroundColor: "#FFC749",
            color: "#000000",
          }}
          overlay
        >
          This website uses cookies to enhance user experience. Cookies will be
          used for analytics, personalised content, and third-party tracking.
        </CookieConsent>
        <h1>
          Welcome to the{" "}
          <strong style={{ color: "#e29578" }}>
            English Culture Dictionary
          </strong>
        </h1>
        <h3>
          This is a place for English learners to get{" "}
          <strong style={{ color: "#e29578", textShadow: "1px 1px 1px #999" }}>
            dictionary definitions{" "}
          </strong>
          <em>and</em> see how those words are used in{" "}
          <strong style={{ color: "#e29578", textShadow: "1px 1px 1px #999" }}>
            real life, pop culture examples.
          </strong>
        </h3>
        <h3>Here's how it works:</h3>
        <ol
          style={{
            lineHeight: 1.4,
            fontSize: 19,
          }}
        >
          <li>Search for a word in our Pop Culture English dictionary.</li>
          <li>
            See the{" "}
            <strong
              style={{ color: "#e29578", textShadow: "1px 1px 1px #CCC" }}
            >
              dictionary definition
            </strong>
            : meaning, examples, and similar words.
          </li>
          <li>
            Get a{" "}
            <strong
              style={{ color: "#e29578", textShadow: "1px 1px 1px #CCC" }}
            >
              Spotify
            </strong>{" "}
            recommendation based on that word and see how it is used in music.
          </li>
          <li>
            Read the latest{" "}
            <strong
              style={{ color: "#e29578", textShadow: "1px 1px 1px #CCC" }}
            >
              Tweets
            </strong>{" "}
            using that word and see how native English speakers are using it.
          </li>
          <li>
            See suggestions from{" "}
            <strong
              style={{ color: "#e29578", textShadow: "1px 1px 1px #CCC" }}
            >
              Urban Dictionary
            </strong>{" "}
            so you get more than just a standard textbook definition. English is
            a <em>living</em> language that changes regularly; keep up to date
            with contemporary meanings!
          </li>
        </ol>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
});

const mapActionsToProps = { addAccessToken };

export default connect(mapStateToProps, mapActionsToProps)(Home);

// SEO terms:
// - contemporary
// - online
// - oxford
