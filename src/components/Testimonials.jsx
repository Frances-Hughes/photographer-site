import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const Testimonials = () => {
  return (
    <Box
      sx={{
        my: "36px",
        padding: "20px",
        mx: { xs: 0, md: 10, lg: 15, xl: 20 },
      }}
    >
      <Typography
        variant="h4"
        sx={{ my: 5, fontWeight: "bold", textAlign: "center" }}
      >
        <TypeAnimation
          sequence={["What people say about me:", 1000]}
          wrapper="span"
          speed={50}
          style={{
            display: "inline-block",
          }}
        />
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          filter: "grayscale(100%)",
          transition: "filter 0.5s ease",
          "&:hover": {
            filter: "none",
          },
        }}
      >
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", my: 2, mx: 2, p: 2 }}
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
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", my: 2, mx: 2, p: 2 }}
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
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", my: 2, mx: 2, p: 2 }}
          >
            "Ayano always takes photos of my turning points in life. She took
            great photos for any occasions, including weddings, maternity
            photos, newborn photos, and travels. I'm always moved by the facial
            expressions and expressions that only she can bring out, and I find
            myself looking back at the photos over and over again. Please take
            photos of important events in my life again! I am always grateful
            for your help!"
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", my: 2, mx: 2, p: 2 }}
          >
            "Ayano was an absolute pleasure to work with for our 3 Kapu Kawhe
            Programme Launch Event. She helped capture some very special moments
            on the night that we use for reports and on our website. Ayano is
            incredibly professional, friendly and a joy to be around - which is
            very important for event photography for guests to feel comfortable
            with requesting for photos."
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
