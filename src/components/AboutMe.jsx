import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  Container,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
// import TestReel from "./TestReel";
import PhotoReel from "./PhotoReel";
import AyaImg from "../Photos/AboutMeImg.jpg";
import EventImg from "../Photos/Gallery11.jpg";
import TypeWriterText from "./TypeWriterText";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#363B40",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#2e3338",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Yuji Syuku", "Helvetica", "Arial", sans-serif',
  },
});

const AboutMe = () => {
  const [offsetY, setOffsetY] = useState(window.pageYOffset * 0.7);
  const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * 0.7);
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const StyledCard = styled(Card)({
    position: "relative",
    zIndex: 2,
    willChange: "transform",
    height: "500px",
    marginTop: "0",
    backgroundColor: "transparent",
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "dark.main" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mt: 36,
          }}
        >
          <Typography
            sx={{ zIndex: 3, position: "relative", my: 2 }}
            variant="h1"
            className={isAtTop ? "bouncy" : ""}
          >
            Ayano
          </Typography>
          <Typography
            sx={{ zIndex: 1, position: "relative" }}
            variant="h1"
            className={isAtTop ? "bouncy" : ""}
          >
            Masuda
          </Typography>
          <StyledCard
            sx={{ my: "42px", transform: `translateY(-${offsetY}px)` }}
          >
            <CardMedia
              component="img"
              image={AyaImg}
              alt="Background Image"
              sx={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                filter: "grayscale(100%)",
                transition: "filter 0.5s ease",
                "&:hover": {
                  filter: "none",
                },
              }}
            />
          </StyledCard>
        </Box>
        {/* <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 0,
          }}
        >
          <TypeWriterText />
        </Container> */}
        <Box sx={{ py: 12 }}>
          <PhotoReel />
        </Box>

        <Container>
          <Box sx={{ my: "12px", padding: "12px" }}>
            <Typography variant="h2" sx={{ textAlign: "center", my: 12 }}>
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", textAlign: "justify", my: 3 }}
            >
              I was born and raised in Japan. At 15, I took a leap of faith and
              moved to New Zealand. I have come to love and call both paradises
              my home. My journey with photography began with a humble Polaroid
              gifted to me on my 7th birthday by my father, sparking a lifelong
              passion for capturing moments frozen in time.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", textAlign: "justify", my: 2 }}
            >
              In 2021, I jumped into the world of freelance photography to
              embrace the freedom of storytelling through my lens. Taking photos
              isn't just about capturing the world around me — it's what makes
              my heart truly come alive with sparkles of happiness. What drives
              me is not just the art of photography, but the profound human
              connections and authentic moments that it allows me to preserve.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", textAlign: "justify", my: 2 }}
            >
              Each click of the shutter is an opportunity to create lasting
              memories, to document the fleeting expressions and emotions that
              define our lives. I seek to capture the essence of each moment,
              allowing it to live on through my photographs.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", textAlign: "justify", my: 2 }}
            >
              Join me on this visual journey, where every frame tells a story of
              connection, emotion, and the timeless beauty of life.
            </Typography>
            <CardMedia
              component="img"
              alt="Happy People at an event"
              sx={{
                maxWidth: "100%",
                mt: 12,
                borderRadius: "15px",
                filter: "grayscale(100%)",
                transition: "filter 0.5s ease",
                "&:hover": {
                  filter: "none",
                },
              }}
              image={EventImg}
            />
            <Link
              to="/gallery"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#363B40",
                  transform: "scale(1.3)",
                  "&:hover": {
                    backgroundColor: "gray",
                  },
                  fontSize: "1.2rem",
                  my: 8,
                }}
              >
                VIEW MY WORK
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutMe;
