import React from "react";
import { Container, Typography, Box, Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const IndividualPhoto = () => {
  return (
    <Container>
      <Box sx={{ my: "20px", p: "20px" }}>
        <Link
          to="/gallery"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button variant="contained">
            <ArrowBackIcon sx={{ mr: "4px" }} />
            BACK TO GALLERY
          </Button>
        </Link>
        <Typography variant="body1" sx={{ my: "10px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          soluta odit tempora distinctio! Unde quod non mollitia beatae culpa
          sunt fuga molestias, est perferendis minus, maxime tenetur optio
          facilis facere?
        </Typography>
        <Typography variant="body1" sx={{ my: "10px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          soluta odit tempora distinctio! Unde quod non mollitia beatae culpa
          sunt fuga molestias, est perferendis minus, maxime tenetur optio
          facilis facere?
        </Typography>
        <CardMedia
          component="img"
          alt="Beautiful sunset over the mountains"
          sx={{ maxWidth: "100%", my: 2 }}
          src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        />
      </Box>
    </Container>
  );
};

export default IndividualPhoto;
