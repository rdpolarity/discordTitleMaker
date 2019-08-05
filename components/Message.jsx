import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function Message(props) {
  return (
    <div className="message">
      <Grid container>
        <Grid item>
          <img src={props.img} className="profilePicture" alt="Avatar" />
        </Grid>
        <Grid item>
          <Grid container direction="column" style={{ marginTop: 10 }}>
            <Typography component="p" className="username">
              {props.username}
              <spam className="subtitle">Today at 8:01 PM</spam>
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
