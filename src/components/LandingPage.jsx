import React from "react";
import { Box, Typography, ThemeProvider, createTheme } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";
import Testimonials from "./Testimonials";
import LandingPageNotApple from "./LandingPageNotApple";
import LandingPageApple from "./LandingPageApple";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Yuji Syuku",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Helvetica",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(","),
    h1: {
      fontWeight: 900,
      fontSize: "42px",
      textTransform: "uppercase",
      textAlign: "center",
      color: "white", // Fallback color
      textFillColor: "transparent",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
    },
  },
});

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.2 } },
};

const isAppleDevice = () => {
  return (
    /Mac|iPod|iPhone|iPad/.test(navigator.platform) ||
    (/Mac|iPhone|iPad/.test(navigator.userAgent) && !window.MSStream)
  );
};

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      {isAppleDevice() ? <LandingPageApple /> : <LandingPageNotApple />}

      <Box
        sx={{
          minHeight: "50vh",
          padding: "2em",
          margin: "auto",
          maxWidth: "800px",
          my: 8,
          "& h2": { fontFamily: "'Yuji Syuku'" },
          "& p": {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          },
        }}
      >
        <Typography variant="h2">一期一会</Typography>
        <Typography variant="h4" sx={{ my: 2, py: 4 }}>
          [/ichigo-ichie/] a Japanese idiom
        </Typography>
        <Typography
          variant="h5"
          sx={{ my: 2, mx: 2, display: "flex", justifyContent: "center" }}
        >
          a cultural concept of treasuring the unrepeatable nature of a moment
        </Typography>
        <Typography
          variant="h5"
          sx={{
            my: 2,
            mx: 2,
            display: "flex",
            justifyContent: "center",
            color: "gray",
          }}
        >
          "Every encounter is a unique and precious moment that will never be
          repeated again."
        </Typography>
      </Box>

      <AnimatedDivider />
      <Testimonials />
    </ThemeProvider>
  );
};

export default LandingPage;
