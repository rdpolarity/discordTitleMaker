import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function Message(props) {
  return (
    <div className="message">
      <Grid container>
        <Grid item>
          <img src={props.img} className="profilePicture" alt="Avatar" />
        </Grid>
        <Grid item xs>
          <Grid container direction="column">
            <Typography component="p" className="username">
              {props.username}
              <span className="subtitle">Today at 8:01 PM</span>
            </Typography>
            <Typography component="p" className="text">
              {props.children}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
