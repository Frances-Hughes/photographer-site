import React from "react";
import { Box, Typography } from "@mui/material";
import "./TypeWriterText.css"; // Importing CSS for complex animations

const TypeWriterText = () => {
  return (
    <Box className="responsive-font" sx={{ color: "white", zIndex: 8 }}>
      <Box className="typewriter">
        {[
          "I capture moments",
          "as a return ticket",
          "to a memory otherwise gone",
        ].map((text, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: { xs: "1rem", md: "2rem" },
              ...typewriterTextStyle,
              animationDelay: `${2.5 * index}s`,
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default TypeWriterText;

const typewriterTextStyle = {
  fontWeight: 400,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textAlign: "center",
  mb: 2,
  animation: "type2 2.7s forwards",
};
