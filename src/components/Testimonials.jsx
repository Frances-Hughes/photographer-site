import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const Testimonials = () => {
  return (
    <Box sx={{ my: "36px", padding: "20px", mx: 15 }}>
      <Typography
        variant="h5"
        sx={{ my: 5, fontWeight: "bold", textAlign: "center" }}
      >
        <TypeAnimation
          sequence={["What people say about me:", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
      </Typography>
      <Grid
        container
        spacing={0}
        sx={{
          filter: "grayscale(100%)",
          transition: "filter 0.5s ease",
          "&:hover": {
            filter: "none",
          },
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              textAlign: "justify",
              my: 2,
              mx: 2,
              p: 2,
            }}
          >
            "Ayano captured some stunning photos of my fiancé and me during our
            engagement photoshoot, truly going above and beyond to make the
            experience extraordinary. Her professionalism was evident throughout
            the entire process, and her dedication made our session
            unforgettable. We are absolutely thrilled with her work and will
            cherish these photos for years to come. I cannot recommend her
            enough; she exceeded all our expectations!"
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              textAlign: "justify",
              my: 2,
              mx: 2,
              p: 2,
            }}
          >
            "For the past few years, when Ayano is in Japan, she has taken many
            photos of us on stage and in the dressing room of our theatre
            performances. She gently captures facial expressions and
            personalities, portraying beauty and deep emotions! The detailed
            moments and brilliance on stage are expressed in a soft and
            realistic manner. We plan to have you take pictures again when you
            return to Japan!"
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              textAlign: "justify",
              my: 2,
              mx: 2,
              p: 2,
            }}
          >
            "Ayano Photography’s work was exceptional. A professional service
            that went beyond expectations and showcased our sport with insight
            and impact. I look forward to working with Ayano again."
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              textAlign: "justify",
              my: 2,
              mx: 2,
              p: 2,
            }}
          >
            "Aya did photography for our event at Storyo and she did such a
            freaking awesome job! Was so thorough with her communication and
            ideas and took SO MANY AMAZING PHOTOS of the event - my heart is
            full and I would 100% recommend Aya"
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
