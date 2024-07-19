import React from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import AnimatedDivider from "./AnimatedDivider";
import Testimonials from "./Testimonials";
import LandingPageNotApple from "./LandingPageNotApple";
import LandingPageApple from "./LandingPageApple";
import LandingPageAppleSmallScreen from "./LandingPageAppleSmallScreen";

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

const isAppleDevice = () => {
  return (
    /Mac|iPod|iPhone|iPad/.test(navigator.platform) ||
    (/Mac|iPhone|iPad/.test(navigator.userAgent) && !window.MSStream)
  );
};

const LandingPage = () => {
  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  const isApple = isAppleDevice();

  return (
    <ThemeProvider theme={theme}>
      {isApple ? (
        isMediumOrLarger ? (
          <LandingPageApple />
        ) : (
          <LandingPageAppleSmallScreen />
        )
      ) : (
        <LandingPageNotApple />
      )}

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
