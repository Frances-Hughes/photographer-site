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
import Sports1 from "../Photos/Sports1.jpg";
import Sports2 from "../Photos/Sports2.jpg";
import Sports3 from "../Photos/Sports3.jpg";
import Sports4 from "../Photos/Sports4.jpg";
import Sports5 from "../Photos/Sports5.jpg";
import Sports6 from "../Photos/Sports6.jpg";
import Sports7 from "../Photos/Sports7.jpg";
import Sports8 from "../Photos/Sports8.jpg";

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
  { id: 1, src: Sports1 },
  { id: 2, src: Sports2 },
  { id: 3, src: Sports3 },
  { id: 4, src: Sports4 },
  { id: 5, src: Sports5 },
  { id: 6, src: Sports6 },
  { id: 7, src: Sports7 },
  { id: 8, src: Sports8 },
  { id: 9, src: Family1 },
  { id: 10, src: Family2 },
  { id: 11, src: Family3 },
  { id: 12, src: Family4 },
  { id: 13, src: Family5 },
  { id: 14, src: Family6 },
  { id: 15, src: Events1 },
  { id: 16, src: Events2 },
  { id: 17, src: Events3 },
  { id: 18, src: Events4 },
  { id: 19, src: Events5 },
  { id: 20, src: Events6 },
  { id: 21, src: Events7 },
  { id: 22, src: Events8 },
  { id: 23, src: Events9 },
  { id: 24, src: Events10 },
  { id: 25, src: Events11 },
  { id: 26, src: Events12 },
  { id: 27, src: Events13 },
  { id: 28, src: Events14 },
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
    case "Sports":
      return images.filter((image) => image.src.includes("Sports"));
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
          label="Sports"
          value="Sports"
          sx={{
            fontSize: { xs: "0.5rem", md: "1rem" },
            color: selectedTab === "Sports" ? "white" : "inherit",
            fontWeight: selectedTab === "Sports" ? "bold" : "normal",
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
