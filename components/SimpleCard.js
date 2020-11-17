import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper elevation={3}>
        <CardContent>
          <Typography color="textSecondary" variant="h6">
            <em>{props.category}</em>
          </Typography>
          <Typography color="textSecondary" variant="h5" gutterBottom>
            {props.definition}
          </Typography>

          <Typography>
            Similar to:{" "}
            {props.synonyms &&
              props.synonyms.map((synonym, i) => {
                if (i === props.synonyms.length - 1) {
                  return synonym;
                } else return `${synonym}, `;
              })}
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  );
}
