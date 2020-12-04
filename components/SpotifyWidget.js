import React, { Component } from "react";

import styles from "../pages/styles/definitions.module.scss";

export class SpotifyWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className={styles.spotify}>
          <iframe
            src={`https://open.spotify.com/embed/track/${this.props.id}`}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default SpotifyWidget;
