// import React, { useState, useEffect, useRef } from "react";
// import { Box } from "@mui/material";

// const baseImages = [
//   // Add all your images
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",
//   "https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg",

//   // Replicate this array as needed to increase the number of images shown
// ];

// // Duplicate the images array for the looping effect
// const images = [...baseImages, ...baseImages];

// export default function PhotoReel() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const containerRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollHeight = document.body.scrollHeight - window.innerHeight;
//       const scrolledRatio = window.scrollY / scrollHeight;
//       // The factor here slows down the scrolling effect, making it more gradual.
//       const factor = 0.2;
//       const newPosition = scrolledRatio * document.body.scrollHeight * factor;

//       setScrollPosition(newPosition);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Calculate the width of a single image set to adjust the transform when nearing the end
//   const singleSetWidth = (images.length / 2) * (250 + 1000); // Adjust 250 + 10 based on actual image width + margin

//   const adjustForLoop = () => {
//     if (scrollPosition >= singleSetWidth) {
//       // Reset position to start for a loop effect
//       return `translateX(${-(scrollPosition - singleSetWidth)}px)`;
//     }
//     return `translateX(${-scrollPosition}px)`;
//   };

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         overflowX: "hidden",
//         height: "250px", // Fixed height for all images
//         minWidth: "200%", // Ensure the container fills the width
//         whiteSpace: "nowrap", // Keep images in a single line
//         willChange: "transform",
//       }}
//       style={{
//         transform: adjustForLoop(),
//       }}
//     >
//       {images.map((src, index) => (
//         <Box
//           key={index}
//           component="img"
//           src={src}
//           sx={{
//             height: "250px", // Ensure all images are 250px tall
//             marginRight: "10px", // Space between images
//             flexShrink: 0, // Prevent images from shrinking
//           }}
//           alt={`Image ${index}`}
//         />
//       ))}
//     </Box>
//   );
// }
