import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion } from "framer-motion";

const TextContainer = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    `Ayano's photography is pure magic! Every shot captures the essence of the moment effortlessly.`,
    `Ayano has a rare gift for capturing moments of pure beauty. Their photos are a true work of art.`,
    `I highly recommend Ayano for any photography needs. Their talent and professionalism are unmatched.`,
    `We hired Ayano for our business event, and the photos were fantastic. Highly recommend!`,
    `Ayano's photos are timeless. We'll cherish these memories forever`,
  ];

  const handleNavigation = (direction) => {
    if (direction === "left") {
      setCurrentText((prev) => (prev === 0 ? texts.length - 1 : prev - 1));
    } else if (direction === "right") {
      setCurrentText((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        handleNavigation("left");
      } else if (event.key === "ArrowRight") {
        handleNavigation("right");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        margin: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgColor: "red",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => handleNavigation("left")}>
          <ChevronLeft />
        </IconButton>
        <Typography variant="body1">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
            key={currentText}
            sx={{
              "& p:first-of-type::first-letter": {
                fontSize: "3em",
                fontWeight: "bold",
              },
            }}
            dangerouslySetInnerHTML={{ __html: texts[currentText] }}
          />
        </Typography>
        <IconButton onClick={() => handleNavigation("right")}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TextContainer;
