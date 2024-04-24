import React from "react";
import { Grid, Paper, Box, Typography, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Importing images
import Gallery1 from "../Photos/Gallery1.jpg";
import Gallery2 from "../Photos/Gallery2.jpg";
import Gallery3 from "../Photos/Gallery3.JPG";
import Gallery4 from "../Photos/Gallery4.jpg";
import Gallery5 from "../Photos/Gallery5.jpg";
import Gallery6 from "../Photos/Gallery6.jpeg";
import Gallery7 from "../Photos/Gallery7.jpg";
import Gallery8 from "../Photos/Gallery8.jpg";
import Gallery9 from "../Photos/Gallery9.png";
import Gallery10 from "../Photos/Gallery10.jpg";
import Gallery11 from "../Photos/Gallery11.jpg";
import Gallery12 from "../Photos/Gallery12.jpg";
import Gallery13 from "../Photos/Gallery13.jpg";
import Gallery14 from "../Photos/Gallery14.jpg";
import Gallery15 from "../Photos/Gallery15.jpg";
import Gallery16 from "../Photos/Gallery16.jpg";
import Gallery17 from "../Photos/Gallery17.png";
import Gallery18 from "../Photos/Gallery18.jpg";
import Gallery19 from "../Photos/Gallery19.png";
import Gallery20 from "../Photos/Gallery20.jpg";
import Gallery21 from "../Photos/Gallery21.jpg";
import Gallery22 from "../Photos/Gallery22.jpg";
import Gallery23 from "../Photos/Gallery23.jpg";
import Gallery24 from "../Photos/Gallery24.png";
import Gallery25 from "../Photos/Gallery25.jpg";
import Gallery26 from "../Photos/Gallery26.jpg";
import Gallery27 from "../Photos/Gallery27.jpg";
import Gallery28 from "../Photos/Gallery28.jpg";
import Gallery29 from "../Photos/Gallery29.jpg";
// import Gallery30 from "../Photos/Gallery30.jpg";
// import Gallery31 from "../Photos/Gallery31.jpg";
// import Gallery32 from "../Photos/Gallery32.jpg";

const images = [
  { id: 1, src: Gallery1 },
  { id: 2, src: Gallery2 },
  { id: 3, src: Gallery3 },
  { id: 4, src: Gallery4 },
  { id: 5, src: Gallery5 },
  { id: 6, src: Gallery6 },
  { id: 7, src: Gallery7 },
  { id: 8, src: Gallery8 },
  { id: 9, src: Gallery9 },
  { id: 10, src: Gallery10 },
  { id: 11, src: Gallery11 },
  { id: 12, src: Gallery12 },
  { id: 13, src: Gallery13 },
  { id: 14, src: Gallery14 },
  { id: 15, src: Gallery15 },
  { id: 16, src: Gallery16 },
  { id: 17, src: Gallery17 },
  { id: 18, src: Gallery18 },
  { id: 19, src: Gallery19 },
  { id: 20, src: Gallery20 },
  { id: 21, src: Gallery21 },
  { id: 22, src: Gallery22 },
  { id: 23, src: Gallery23 },
  { id: 24, src: Gallery24 },
  { id: 25, src: Gallery25 },
  { id: 26, src: Gallery26 },
  { id: 27, src: Gallery27 },
  { id: 28, src: Gallery28 },
  { id: 29, src: Gallery29 },
  // { id: 30, src: Gallery30 },
  // { id: 31, src: Gallery31 },
  // { id: 32, src: Gallery32 },
];

const ImagePaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  margin: "7px",
  padding: "6px",
  backgroundColor: "transparent",
  boxShadow: "none",
  "& img": {
    width: "100%",
    objectFit: "cover",
    filter: "grayscale(100%)",
    transition: "filter 0.3s ease",
  },
  "&:hover img": {
    filter: "none",
  },
  "& .border": {
    position: "absolute",
    opacity: 1,
  },
  "& .border:before, & .border:after, & .border div:before, & .border div:after":
    {
      backgroundColor: "#b7b7b7",
      position: "absolute",
      content: '""',
      display: "block",
      transition: "all 0.4s ease-in-out",
    },
  "& .border:before, & .border:after": {
    width: 0,
    height: "1px",
  },
  "& .border div:before, & .border div:after": {
    width: "1px",
    height: 0,
  },
  "& .border.one": {
    left: 0,
    top: 0,
    right: "12px",
    bottom: "12px",
  },
  "& .border.one:before, & .border.one div:before": {
    left: 0,
    top: 0,
  },
  "& .border.one:after, & .border.one div:after": {
    bottom: 0,
    right: 0,
  },
  "& .border.two": {
    left: "12px",
    top: "12px",
    right: 0,
    bottom: 0,
  },
  "& .border.two:before, & .border.two div:before": {
    right: 0,
    top: 0,
  },
  "& .border.two:after, & .border.two div:after": {
    bottom: 0,
    left: 0,
  },
  "& a": {
    position: "absolute",
    zIndex: 1,
    cursor: "pointer",
  },
  "&:hover .border:before, &:hover .border:after": {
    width: "100%",
  },
  "&:hover .border div:before, &:hover .border div:after": {
    height: "100%",
  },
}));

const Gallery = () => {
  return (
    <Box sx={{ px: "5%", my: 12 }}>
      <Typography
        variant="h2"
        sx={{ display: "flex", justifyContent: "center", my: "22px" }}
      >
        Gallery
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {images.map((image) => (
          <Grid item key={image.id} xs={12} sm={12} lg={6}>
            <ImagePaper>
              <LazyLoadImage
                src={image.src}
                alt={`Gallery Image ${image.id}`}
                effect="blur"
                placeholder={
                  <Skeleton variant="rectangular" width="100%" height={200} />
                }
                wrapperClassName="image-wrapper"
              />
              <div className="border one">
                <div></div>
              </div>
              <div className="border two">
                <div></div>
              </div>
            </ImagePaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
