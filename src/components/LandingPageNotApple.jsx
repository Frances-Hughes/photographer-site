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

const LandingPageNotApple = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "120vh",
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
            height: "60vh",
            left: 0,
            width: "100%",
            bgcolor: "primary",
            WebkitMaskImage: "-webkit-linear-gradient(top, #000 0%, #000 100%)",
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
                backgroundColor: "white",
                filter: "grayscale(100%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingX: "4px",
                fontWeight: "bold",
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
            top: "60vh",
            height: "60vh",
            left: 0,
            width: "100%",
            backgroundImage: `url(${LandingImg})`,
            backgroundSize: "cover",
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
                bgcolor: "black",
                opacity: 1, // This will be the end state of the animation
                animation: "fadeInRight 1.5s ease-out forwards", // Adjust duration and easing to match your fadeIn function
                animationDelay: "0.2s", // This is your delay before the animation starts
                paddingX: "4px",
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
    </Box>
  );
};

export default LandingPageNotApple;
