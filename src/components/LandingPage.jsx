import React from "react";
import {
  Box,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import { motion } from "framer-motion";
// import { fadeIn } from "./variants";

// Custom theme to incorporate the 'Fraunces' font
const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Helvetica",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(","),
    h1: {
      fontFamily: "'Fraunces', serif",
      fontWeight: 900,
      fontSize: "64px",
      textTransform: "uppercase",
      textAlign: "center",
      color: "black", // Fallback color
      textFillColor: "transparent",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
    },
    h2: {
      fontFamily: "'Fraunces', serif",
    },
  },
});

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.2 } },
};

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "200vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* First container */}
        <Box
          sx={{
            clip: "rect(0, auto, auto, 0)",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            height: "100vh",
            left: 0,
            width: "100%",
            bgcolor: "white",
            WebkitMaskImage:
              "-webkit-linear-gradient(top, #ffffff 0%, #ffffff 100%)",
            "& .title_wrapper": {
              position: "fixed",
              top: "50%",
              width: "100%",
              transform: "translateY(-50%)",
            },
          }}
        >
          <Box className="title_wrapper">
            <Typography
              variant="h1"
              sx={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1575058752200-a9d6c0f41945?&q=85)",
                backgroundSize: "100vw auto",
                backgroundPosition: "center",
              }}
              component={motion.div} // Use motion.div as the root component
              variants={variants} // Apply animation variants
              initial="hidden" // Initial animation state
              animate="visible" // Final animation state
            >
              Ayano Masuda Photography
            </Typography>
          </Box>
        </Box>

        {/* Second container */}
        <Box
          sx={{
            clip: "rect(0, auto, auto, 0)",
            overflow: "hidden",
            position: "absolute",
            top: "100vh",
            height: "100vh",
            left: 0,
            width: "100%",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1575058752200-a9d6c0f41945?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)",
            backgroundSize: "100vw auto",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            "& .title_wrapper": {
              position: "fixed",
              top: "50%",
              width: "100%",
              transform: "translateY(-50%)",
              color: "white",
            },
          }}
        >
          <Box className="title_wrapper white">
            <Typography
              variant="h1"
              sx={{
                zIndex: 5,
                bgcolor: "white",
                opacity: 1, // This will be the end state of the animation
                backgroundColor: "white",
                animation: "fadeInRight 1.5s ease-out forwards", // Adjust duration and easing to match your fadeIn function
                animationDelay: "0.2s", // This is your delay before the animation starts
              }}
              component={motion.div} // Use motion.div as the root component
              variants={variants} // Apply animation variants
              initial="hidden" // Initial animation state
              animate="visible" // Final animation state
            >
              Ayano Masuda Photography
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          padding: "2em",
          margin: "auto",
          maxWidth: "800px",
          "& h2": { fontFamily: "'Fraunces', serif" },
          "& p": {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          },
        }}
      >
        <Typography variant="h2">Lorem ipsum dolor sit amet.</Typography>
        <Typography paragraph>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, q
        </Typography>
        <Typography paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;