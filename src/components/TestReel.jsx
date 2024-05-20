import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

// Local image imports
import Reel1 from "../Photos/Reel/Reel1.png";
import Reel2 from "../Photos/Reel/Reel2.jpg";
import Reel3 from "../Photos/Reel/Reel3.png";
import Reel4 from "../Photos/Reel/Reel4.jpeg";
import Reel5 from "../Photos/Reel/Reel5.jpg";
import Reel6 from "../Photos/Reel/Reel6.jpg";
import Reel7 from "../Photos/Reel/Reel7.jpg";
import Reel8 from "../Photos/Reel/Reel8.jpg";
import Reel9 from "../Photos/Reel/Reel9.jpg";
import Reel10 from "../Photos/Reel/Reel10.jpg";
// import Reel11 from "../Photos/Reel/Reel11.jpg";

// Updated array with local images
const baseImages = [
  Reel2,
  Reel3,
  Reel4,
  Reel5,
  Reel6,
  Reel7,
  Reel1,
  Reel8,
  Reel9,
  Reel10,
];
const images = [...baseImages, ...baseImages];

export default function TestReel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrolledRatio = window.scrollY / scrollHeight;
      const factor = 0.2;
      const newPosition = scrolledRatio * document.body.scrollHeight * factor;

      setScrollPosition(newPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const singleSetWidth = images.length * (250 + 10); // Adjust based on actual image width + margin

  const adjustForLoop = () => {
    if (scrollPosition >= singleSetWidth) {
      return `translateX(${-(
        scrollPosition - singleSetWidth
      )}px) rotateZ(-2deg)`;
    }
    return `translateX(${-scrollPosition}px) rotateZ(-2deg)`;
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        alignItems: "center",
        overflowX: "hidden",
        height: "100%",
        minWidth: "120vw",
        whiteSpace: "nowrap",
        willChange: "transform",
        perspective: "1000px",
        my: 18,
        backgroundColor: "black",
        padding: "20px",
      }}
      style={{
        transform: adjustForLoop(),
      }}
    >
      {images.map((src, index) => (
        <Box sx={{ px: "3px" }} key={index}>
          <Box
            component="img"
            src={src} // This now uses local image paths
            sx={{
              height: "250px",
              margin: "0 10px",
              flexShrink: 0,
            }}
            alt={`Image ${index}`}
          />
        </Box>
      ))}
    </Box>
  );
}
