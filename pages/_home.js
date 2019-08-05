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
  InputAdornment,
  Typography
} from "@material-ui/core";
import download from "downloadjs";
import { renderToString } from "react-dom/server";
import svgToImg from "svg-to-image";

export default function Home() {
  const makeTitle = () => {
    return (
      <svg width="700px" height={size} className="svgBox">
        <defs>
          <filter id="shadow" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <text
          filter="url(#shadow)"
          fontFamily="Franklin Gothic Medium"
          dominantBaseline="central"
          x="10px"
          y="50%"
          fontSize={size}
          fill={color}
        >
          {text}
        </text>
      </svg>
    );
  };
  const titleDownload = () => {
    let render = renderToString(makeTitle());
    let element = document.createElement("div");
    element.innerHTML = render;
    element = element.firstChild;
    var svgData = new XMLSerializer().serializeToString(element);
    var canvas = document.createElement("canvas");
    canvas.height = size;
    canvas.width = 700;
    var ctx = canvas.getContext("2d");
    var img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

    img.onload = function() {
      ctx.drawImage(img, 0, 0);

      // Now is done
      download(canvas.toDataURL("image/png"), text + ".png");
    };
  };
  const [color, setColor] = useState("#7289da");
  const [text, setText] = useState("Title");
  const [size, setSize] = useState(100);
  const handleText = e => setText(e.target.value);
  const handleColor = e => setColor("#" + e.target.value);
  const handleSize = e => setSize(e.target.value);

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
              defaultValue="7289da"
              onChange={handleColor}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">#</InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Size"
              defaultValue="100"
              onChange={handleSize}
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
      <Typography component="p">
        Copyright 2019 © <a href="https://aydie.me">aydie.me</a>
      </Typography>
    </Grid>
  );
}
