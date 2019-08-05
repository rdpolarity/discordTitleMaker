import React from "react";
import "../styles/style.scss";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Message from "../components/Message";
import { Grid, Button, TextField } from "@material-ui/core";
import Home from "./_home";
import { Head } from "next/document";

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
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
}
