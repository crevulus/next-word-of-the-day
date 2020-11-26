import React, { Component } from "react";

import { connect } from "react-redux";
import { toggleExplicit, toggleNiche } from "../redux/actions/choicesActions";

import Link from "next/link";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import HomeIcon from "@material-ui/icons/Home";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.secondary.main,
  },
}))(Tooltip);

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      explicit: false,
      niche: false,
    };
  }
  handleChange = (event) => {
    if (event.target.name === "explicit") {
      this.props.toggleExplicit(event.target.checked);
    } else if (event.target.name === "niche") {
      this.props.toggleNiche(event.target.checked);
    }
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense" style={{ justifyContent: "space-between" }}>
            <Link href="/">
              <Typography variant="h6" color="inherit" className="link">
                <HomeIcon />
                Pop Culture Dictionary
              </Typography>
            </Link>
            {/* <FormGroup row>
              <HtmlTooltip
                title={
                  <Typography color="inherit">
                    You can change your search results with these checkboxes
                  </Typography>
                }
              >
                <HelpOutlineIcon />
              </HtmlTooltip>
              <HtmlTooltip
                title={
                  <Typography color="inherit">
                    Songs from lesser-known artists and less popular tweets.
                  </Typography>
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.props.choices.niche}
                      onChange={this.handleChange}
                      name="niche"
                    />
                  }
                  label="Niche"
                />
              </HtmlTooltip>
              <HtmlTooltip
                title={
                  <Typography color="inherit">
                    Songs with explicit lyrics and Urban Dictionary results by
                    default. Don't say we didn't warn you!
                  </Typography>
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.props.choices.explicit}
                      onChange={this.handleChange}
                      name="explicit"
                    />
                  }
                  label="Explicit"
                />
              </HtmlTooltip>
            </FormGroup> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  choices: state.choices,
});

const mapActionsToProps = { toggleExplicit, toggleNiche };

export default connect(mapStateToProps, mapActionsToProps)(NavBar);
