import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const AnimatedLine = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <Box
      component={motion.div}
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
      sx={{
        backgroundColor: "currentColor",
        height: "2px",
        width: "100%",
        transformOrigin: "left",
        position: "relative",
      }}
    />
  );
};

export default AnimatedLine;
