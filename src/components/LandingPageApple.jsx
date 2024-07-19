import React from "react";
import { Box, Typography, createTheme } from "@mui/material";
import LandingImg from "../Photos/LandingImg/LandingPageImg.jpg";
import { motion } from "framer-motion";

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

const LandingPageApple = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          my: 15,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            component={motion.div} // Use motion.div as the root component
            variants={variants} // Apply animation variants
            initial="hidden" // Initial animation state
            animate="visible" // Final animation state
            sx={{
              fontSize: { xs: "2rem", md: "4rem" },
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
              mt: 10,
              mb: { xs: 10, md: 30 },
            }}
          >
            AYANO MASUDA PHOTOGRAPHY
          </Typography>
          <Box
            sx={{
              height: "35vh",
              width: "100vw",
              backgroundImage: `url(${LandingImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPageApple;
