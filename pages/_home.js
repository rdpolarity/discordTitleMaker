import React, { useState } from "react";
import "../styles/style.scss";
import Message from "../components/Message";
import {
  Grid,
  Button,
  TextField,
  IconButton,
  Icon,
  Container,
  InputLabel,
  Input,
  InputAdornment
} from "@material-ui/core";
import htmlToImage from "html-to-image";
import download from "downloadjs";
import { renderToString } from "react-dom/server";

export default function Home() {
  const makeTitle = () => {
    return (
      <span
        id="title"
        style={{
          color: `${color}`,
          fontSize: "100px",
          textShadow: "2px 2px 4px #111"
        }}
      >
        {text}
      </span>
    );
  };
  const titleDownload = e => {
    let render = renderToString(makeTitle());
    let element = document.createElement("div");
    element.innerHTML = render;
    element = element.firstChild;
    console.log(element);

    htmlToImage.toPng(element).then(function(dataUrl) {
      console.log(dataUrl);
      // download(dataUrl, "my-node.png");
    });
  };
  const [color, setColor] = useState("#FFF");
  const [text, setText] = useState("Title");
  const handleText = e => setText(e.target.value);
  const handleColor = e => setColor("#" + e.target.value);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="discordContainer"
    >
      <Container maxWidth="md" className="container">
        <Grid spacing={1} justify="center" irection="column" container>
          <Grid item>
            <TextField
              onChange={handleText}
              variant="outlined"
              label="Title"
              className="field"
              defaultValue="Title"
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Color Hex"
              defaultValue="FFF"
              onChange={handleColor}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">#</InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item>
            <IconButton onClick={titleDownload}>
              <Icon>vertical_align_bottom</Icon>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" className="container">
        <Message img="../static/images/rdpolarity.gif" username="RDPolarity">
          {makeTitle()}
        </Message>
        <Message img="../static/images/rdpolarity.gif" username="RDPolarity">
          Thing <br /> test <br /> test <br /> test
        </Message>
        <Message img="../static/images/rdpolarity.gif" username="RDPolarity">
          Bruh <br /> That's a pretty neat title
        </Message>
      </Container>
    </Grid>
  );
}
