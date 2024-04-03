// Gallery.js
import React from "react";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ImagePaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  margin: "7px",
  padding: "6px",
  minWidth: "230px",
  maxWidth: "315px",
  backgroundColor: "transparent",
  boxShadow: "none",
  "& img": {
    maxWidth: "100%",
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
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    zIndex: 1,
    cursor: "pointer", // Add cursor pointer for better UX
  },
  "&:hover .border:before, &.hover .border:before, &:hover .border:after, &.hover .border:after":
    {
      width: "100%",
    },
  "&:hover .border div:before, &.hover .border div:before, &:hover .border div:after, &.hover .border div:after":
    {
      height: "100%",
    },
}));

const images = [
  {
    id: 1,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 2,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 3,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 4,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 5,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 6,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 7,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 8,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 9,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 10,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 11,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 12,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 13,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 14,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 15,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 16,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 17,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 18,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 19,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 20,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 21,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 22,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 23,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 24,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 25,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 26,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 27,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 28,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 29,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },
  {
    id: 30,
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg",
  },

  // Add more image objects here with unique ids and URLs
];

const Gallery = () => {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {images.map((image) => (
          <Grid item key={image.id}>
            <ImagePaper sx={{ bgColor: "black" }}>
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                onClick={() => {
                  window.location.href = `/gallery/${image.id}`;
                }}
              />
              <div
                className="border one"
                onClick={() => {
                  window.location.href = `/gallery/${image.id}`;
                }}
              >
                <div></div>
              </div>
              <div
                className="border two"
                onClick={() => {
                  window.location.href = `/gallery/${image.id}`;
                }}
              >
                <div></div>
              </div>
              <Link
                to={`/gallery/${image.id}`}
                style={{ display: "none" }}
              ></Link>
            </ImagePaper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
