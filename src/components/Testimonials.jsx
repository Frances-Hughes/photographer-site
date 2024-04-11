import React from "react";
import { Typography, Container } from "@mui/material";
import TextContainer from "./TextContainer";
import { TypeAnimation } from "react-type-animation";

const Testimonials = () => {
  return (
    <>
      <Container sx={{ my: 5 }}>
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          <TypeAnimation
            sequence={["What people say about me:", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </Typography>
        <TextContainer />
      </Container>
    </>
  );
};

export default Testimonials;
