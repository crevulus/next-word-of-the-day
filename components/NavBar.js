import React, { Component } from "react";

import { connect } from "react-redux";
import { toggleChoice } from "../redux/actions/choicesActions";

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
      explicitChecked: false,
      nicheChecked: false,
    };
  }
  handleChange = (event) => {
    this.props.toggleChoice(event.target.checked);
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
            <FormGroup row>
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
                      checked={this.state.nicheChecked}
                      onChange={this.handleChange}
                      name="nicheChecked"
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
                      checked={this.state.explicitChecked}
                      onChange={this.handleChange}
                      name="explicitChecked"
                    />
                  }
                  label="Explicit"
                />
              </HtmlTooltip>
            </FormGroup>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  choice: state.choice,
});

const mapActionsToProps = { toggleChoice };

export default connect(mapStateToProps, mapActionsToProps)(NavBar);
