import React, { useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Skeleton,
  Tabs,
  Tab,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Importing images
import commercial1 from "../Photos/commercial1.jpg";
import commercial2 from "../Photos/commercial2.jpg";
import commercial3 from "../Photos/commercial3.jpg";
import commercial4 from "../Photos/commercial4.jpg";
import commercial5 from "../Photos/commercial5.jpg";
import commercial6 from "../Photos/commercial6.jpg";
import commercial7 from "../Photos/commercial7.jpg";
import commercial8 from "../Photos/commercial8.jpg";
import commercial9 from "../Photos/commercial9.jpg";
import commercial10 from "../Photos/commercial10.jpg";
import commercial11 from "../Photos/commercial11.jpg";
import commercial12 from "../Photos/commercial12.jpg";
import commercial13 from "../Photos/commercial13.jpg";
import commercial14 from "../Photos/commercial14.jpg";

import Family1 from "../Photos/Family1.JPG";
import Family2 from "../Photos/Family2.jpg";
import Family3 from "../Photos/Family3.jpg";
import Family4 from "../Photos/Family4.JPG";
import Family5 from "../Photos/Family5.jpg";
import Family6 from "../Photos/Family6.jpg";

import Events1 from "../Photos/Events1.jpg";
import Events2 from "../Photos/Events2.jpg";
import Events3 from "../Photos/Events3.jpg";
import Events4 from "../Photos/Events4.jpg";
import Events5 from "../Photos/Events5.jpg";
import Events6 from "../Photos/Events6.jpg";
import Events7 from "../Photos/Events7.jpg";
import Events8 from "../Photos/Events8.jpg";
import Events9 from "../Photos/Events9.jpg";
import Events10 from "../Photos/Events10.JPG";
import Events11 from "../Photos/Events11.jpg";
import Events12 from "../Photos/Events12.jpg";
import Events13 from "../Photos/Events13.jpg";
import Events14 from "../Photos/Events14.jpg";

const images = [
  { id: 1, src: commercial1 },
  { id: 2, src: commercial2 },
  { id: 3, src: commercial3 },
  { id: 4, src: commercial4 },
  { id: 5, src: commercial5 },
  { id: 6, src: commercial6 },
  { id: 7, src: commercial7 },
  { id: 8, src: commercial8 },
  { id: 9, src: commercial9 },
  { id: 10, src: commercial10 },
  { id: 11, src: commercial11 },
  { id: 12, src: commercial12 },
  { id: 13, src: commercial13 },
  { id: 14, src: commercial14 },
  { id: 15, src: Family1 },
  { id: 16, src: Family2 },
  { id: 17, src: Family3 },
  { id: 18, src: Family4 },
  { id: 19, src: Family5 },
  { id: 20, src: Family6 },
  { id: 21, src: Events1 },
  { id: 22, src: Events2 },
  { id: 23, src: Events3 },
  { id: 24, src: Events4 },
  { id: 25, src: Events5 },
  { id: 26, src: Events6 },
  { id: 27, src: Events7 },
  { id: 28, src: Events8 },
  { id: 29, src: Events9 },
  { id: 30, src: Events10 },
  { id: 31, src: Events11 },
  { id: 32, src: Events12 },
  { id: 33, src: Events13 },
  { id: 34, src: Events14 },
];

const ImagePaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  margin: "7px",
  padding: "6px",
  backgroundColor: "transparent",
  boxShadow: "none",
  "& img": {
    width: "100%",
    maxHeight: "500px", // Use maxHeight instead of fixed height
    objectFit: "cover",
    objectPosition: "center", // Center the image
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

const filterImages = (category) => {
  switch (category) {
    case "commercial":
      return images.filter((image) => image.src.includes("commercial"));
    case "Family":
      return images.filter((image) => image.src.includes("Family"));
    default:
      return images.filter((image) => image.src.includes("Events"));
  }
};

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState("Events");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ px: "2%", my: 12 }}>
      <Typography
        variant="h2"
        sx={{ display: "flex", justifyContent: "center", my: "22px" }}
      >
        Gallery
      </Typography>
      <Tabs
        sx={{ mt: 5, mb: 10 }}
        value={selectedTab}
        onChange={handleTabChange}
        centered
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: "white",
          },
        }}
      >
        <Tab
          label="Events/Entertainment"
          value="Events"
          sx={{
            fontSize: { xs: "0.5rem", md: "1rem" },
            color: selectedTab === "Events" ? "white" : "inherit",
            fontWeight: selectedTab === "Events" ? "bold" : "normal",
          }}
        />
        <Tab
          label="commercial"
          value="commercial"
          sx={{
            fontSize: { xs: "0.5rem", md: "1rem" },
            color: selectedTab === "commercial" ? "white" : "inherit",
            fontWeight: selectedTab === "commercial" ? "bold" : "normal",
          }}
        />
        <Tab
          label="Family"
          value="Family"
          sx={{
            fontSize: { xs: "0.5rem", md: "1rem" },
            color: selectedTab === "Family" ? "white" : "inherit",
            fontWeight: selectedTab === "Family" ? "bold" : "normal",
          }}
        />
      </Tabs>
      <Grid container spacing={3} justifyContent="center">
        {filterImages(selectedTab).map((image) => (
          <Grid item key={image.id} xs={12} sm={12} lg={6}>
            <ImagePaper>
              <LazyLoadImage
                src={image.src}
                alt={`Gallery Image ${image.id}`}
                effect="blur"
                placeholder={
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    maxHeight={500}
                  />
                }
                maxHeight={500}
                width="100%"
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
