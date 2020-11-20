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
      <Paper elevation={3}>
        <CardContent>
          <Typography color="primary" variant="h6">
            {replaceBrackets(props.definition)}
          </Typography>
          <Typography color="secondary" variant="subtitle1">
            {replaceBrackets(props.example)}
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  );
}
