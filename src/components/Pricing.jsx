import React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Image1 from "../Photos/Reel/Reel11.jpg";
import Image2 from "../Photos/Reel/Reel2.jpg";
import Image3 from "../Photos/Reel/Reel12.png";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <Container
        sx={{
          my: 10,
        }}
      >
        <Typography sx={{ display: "flex", justifyContent: "center", my: 5 }}>
          <TypeAnimation
            sequence={["Pricing:", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          I have a range of packages available, from Business and Corporate
          Events to Cultural and Community Events, couples & family.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", my: 2 }}>
          All packages include a set of digital images. Printed products and
          stunning ly high quality albums are available to order in addition.
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
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
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={Image1}
                  alt="Image 1"
                />
              </Card>
              <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                Business and Corporate Events
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                Pricing starts at $500
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={Image2}
                  alt="Image 2"
                />
              </Card>
              <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                Family and Couples
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                Pricing starts at $500
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="100%"
                  image={Image3}
                  alt="Image 3"
                />
              </Card>
              <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                Cultural and Community Events
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                Pricing starts at $500
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h6" sx={{ textAlign: "center", my: 3 }}>
          If you’d like detailed session and pricing info, just click the button
          below.
        </Typography>
        <Link
          to="/contactme"
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
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            TELL ME MORE
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Pricing;
