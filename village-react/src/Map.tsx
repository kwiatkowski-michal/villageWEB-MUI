import { Box, Container } from "@mui/material";
import React from "react";

const Map = () => {
  return (
    <Box>
      <iframe
        width="100%"
        height="600"
        style={{ border: 0}}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9586.391017932367!2d17.855892752116045!3d53.08149881797574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47036d5333cd6c27%3A0x21ad62aa5fcf93e!2s86-005%20Kruszyn%20Kraje%C5%84ski!5e0!3m2!1spl!2spl!4v1680691041167!5m2!1spl!2spl"
      ></iframe>
    </Box>
  );
};

export default Map;
