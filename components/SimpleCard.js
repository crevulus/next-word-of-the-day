import React from "react";

import theme from "../styles/theme";

import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
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
          <Typography color="secondary" variant="h6">
            <em>{props.category}</em>
          </Typography>
          <Typography color="primary" variant="h5" gutterBottom>
            {props.definition}
          </Typography>

          <Typography color="secondary">
            {props.synonyms && (
              <div>
                <span style={{ color: "black" }}>Similar to: </span>
                {props.synonyms.map((synonym, i) => {
                  if (i === props.synonyms.length - 1) {
                    return (
                      <Link href={`/definition/${synonym}`}>{synonym}</Link>
                    );
                  } else
                    return (
                      <span>
                        <Link href={`/definition/${synonym}`}>{synonym}</Link>
                        {", "}
                      </span>
                    );
                })}
              </div>
            )}
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  );
}
