import React from "react";
import "../styles/style.scss";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Message from "../components/Message";
import { Grid, Button, TextField } from "@material-ui/core";
import Home from "./_home";
import { Head } from "next/document";
import { Preloader, Placeholder } from "react-preloading-screen";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#7289DA"
    }
  }
});

export default function index() {
  return (
    <Preloader style={{ backgroundColor: "black" }}>
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
      <Placeholder>
        <img height="200px" src="../static/images/loading.gif" />
      </Placeholder>
    </Preloader>
  );
}
