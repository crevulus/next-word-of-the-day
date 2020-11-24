import React from "react";

import Link from "next/link";

import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function UrbanCard(props) {
  function replaceBrackets(string) {
    let newString = string.replace(/\[|\]/g, "");
    return newString;
  }
  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ backgroundColor: "#edf6f9" }}>
        <CardContent style={{ textShadow: "none" }}>
          <Typography variant="h6">
            {replaceBrackets(props.definition)}
          </Typography>
          <Typography color="primary" variant="subtitle1">
            <em>"{replaceBrackets(props.example)}"</em>
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  );
}
