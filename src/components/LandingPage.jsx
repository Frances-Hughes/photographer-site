import React from "react";
import {
  Box,
  Typography,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import LandingImg from "../Photos/LandingImg/LandingPageImg.jpg";

// import AB from "../../public/AB.png";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AnimatedDivider from "./AnimatedDivider";

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

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
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
                backgroundImage: `url(${LandingImg})`,
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

      <Box
        sx={{
          minHeight: "50vh",
          padding: "2em",
          margin: "auto",
          maxWidth: "800px",
          "& h2": { fontFamily: "'Yuji Syuku'" },
          "& p": {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          },
        }}
      >
        <Typography variant="h2">一期一会</Typography>
        <Typography variant="h4" sx={{ my: 2 }}>
          [/ichigo-ichie/] a Japanese idiom
        </Typography>
        <Typography
          variant="h5"
          sx={{ my: 2, display: "flex", justifyContent: "center" }}
        >
          a cultural concept of treasuring the unrepeatable nature of a moment
        </Typography>
        <Typography
          variant="h5"
          sx={{
            my: 2,
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
      <Box sx={{ my: "36px", padding: "20px" }}>
        <Typography
          variant="h5"
          sx={{ my: 3, fontWeight: "bold", textAlign: "center" }}
        >
          <TypeAnimation
            sequence={["What people say about me:", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease",
            "&:hover": {
              filter: "none",
            },
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
              "Ayano took some stunning photos of my fiancé and I for our
              engagement photoshoot. We are so pleased with her work and will
              treasure these pictures for years to come. I cannot recommend her
              enough!"
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
              "All the fun, love and laughters very well captured by the
              talented @ayanophotography.jp"
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
              "It was the best night. I highly recommend a 'photography gift' to
              capture the moment with @ayanophotography.jp"
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
              "Aya did photography for our event at Storyo and she did such a
              freaking awesome job! Was so thorough with her communication and
              ideas and took SO MANY AMAZING PHOTOS of the event - my heart is
              full and I would 100% recommend Aya"
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
