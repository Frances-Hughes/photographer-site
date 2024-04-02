import { Container } from "@mui/material";
import "../App.css";
import React from "react";
// import logoexample from "../../public/logoexample.png";
// import logonosaturation from "../../public/logonosaturation.png";

const Logo = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
    >
      <img src="./logoexample.png" alt="Logo" height={90} />
    </Container>
  );
};

export default Logo;
