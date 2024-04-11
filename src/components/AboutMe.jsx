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
import TestReel from "./TestReel";
import AyaImg from "../Photos/AboutMeImg.png";
import EventImg from "../a1.jpg";
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
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset * 0.7);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const StyledCard = styled(Card)({
    position: "relative",
    zIndex: 2,
    transition: "transform 0.1s ease-in-out",
    willChange: "transform",
    height: "500px",
    marginTop: "0",
    backgroundColor: "transparent",
  });

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToTop = window.scrollY === 0;
      setIsAtTop(scrolledToTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            sx={{ zIndex: 3, position: "relative", my: 2 }} // Adjusted mt value
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
            sx={{ my: "42px", transform: `translateY(-${offsetY}px)` }} // Smooth scroll effect
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
                  filter: "none", // Remove filter on hover
                },
              }}
            />
          </StyledCard>
        </Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: -12,
          }}
        >
          <TypeWriterText />
        </Container>
        <TestReel />
        <Container>
          <Box sx={{ my: "36px", p: "20px" }}>
            <Typography variant="h2" sx={{ textAlign: "center", my: 12 }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ my: 12 }}>
              Growing up surrounded by awe-inspiring mountains juxtaposed
              against vast open fields, nurtured my creativity from a young age.
              This environment allowed my artistic instincts to flourish and
              unleashed my passion for visual storytelling. My fascination with
              evoking emotions through art led me to photography, a medium that
              felt like pure magic from the moment I held a camera. I prefer
              showcasing my vibrant, serene, and dynamic life visually rather
              than explaining it verbally. The pursuit of impactful moments
              fueled my curiosity to explore beyond boundaries, leading me to
              delve into various creative endeavors like filmmaking, film
              photography, design, podcasting, music, and the quest for the
              perfect pancake. Through challenging conditions and sleepless
              nights, I've honed my skills, adapting to difficult situations
              while chasing captivating images. Despite the hardships, I've also
              learned to appreciate moments of relaxation, like sipping a
              Margarita by the pool. Life's endless intrigue continually
              inspires me, and I'm always ready to capture new adventures and
              freeze timeless memories. The journey is far from over, and I
              invite you to join me as we explore the beauty of life through my
              lens.
            </Typography>
            <Typography variant="body1" sx={{ my: 12 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              soluta odit tempora distinctio! Unde quod non mollitia beatae
              culpa sunt fuga molestias, est perferendis minus, maxime tenetur
              optio facilis facere?
            </Typography>
            <CardMedia
              component="img"
              alt="Happy People at an event"
              sx={{
                maxWidth: "100%",
                my: 4,
                borderRadius: "15px",
                filter: "grayscale(100%)",
                transition: "filter 0.5s ease",
                "&:hover": {
                  filter: "none", // Remove filter on hover
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
              <Button variant="contained">VIEW MY WORK</Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutMe;
