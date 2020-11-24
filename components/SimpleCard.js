import React from "react";

import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function SimpleCard(props) {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ backgroundColor: "#edf6f9" }}>
        <CardContent style={{ textShadow: "none" }}>
          <Typography color="secondary" variant="h6">
            <em>{props.category}</em>
          </Typography>
          <Typography variant="h5" gutterBottom>
            {props.definition}
          </Typography>
          {props.examples && (
            <Typography color="primary" variant="h6" gutterBottom>
              <em>"{props.examples[0]}"</em>
            </Typography>
          )}

          {props.synonyms && (
            <Typography color="secondary">
              <span style={{ color: "black" }}>Similar to: </span>
              {props.synonyms.map((synonym, i) => {
                if (i === props.synonyms.length - 1) {
                  return (
                    <Link key={i} href={`/definition/${synonym}`}>
                      {synonym}
                    </Link>
                  );
                } else
                  return (
                    <span>
                      <Link key={i} href={`/definition/${synonym}`}>
                        {synonym}
                      </Link>
                      {", "}
                    </span>
                  );
              })}
            </Typography>
          )}
        </CardContent>
      </Paper>
    </Grid>
  );
}
