import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

const baseImages = [
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
  "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",

  // Other image URLs...
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
        minWidth: "200%",
        whiteSpace: "nowrap",
        willChange: "transform",
        perspective: "1000px",
        my: 18,
        backgroundColor: "black", // Background color set to red
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
            src={src}
            sx={{
              height: "250px",
              margin: "0 10px", // Adjust margins as needed, replaced px with margin for clarity
              flexShrink: 0,
            }}
            alt={`Image ${index}`}
          />
        </Box>
      ))}
    </Box>
  );
}
