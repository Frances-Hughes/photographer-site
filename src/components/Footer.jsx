import React from "react";
import { Box, Container, Link, Grid, Tooltip } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import CodeIcon from "@mui/icons-material/Code";

const FooterContainer = (theme) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  margin: 0,
  padding: 1,
  backgroundColor: "transparent", // Changed from "white" to match NavBar's transparent background
  backdropFilter: "blur(15px)", // Matching blur effect with NavBar
  WebkitBackdropFilter: "blur(15px)", // For compatibility with Safari
  color: theme.palette.primary.contrastText,
});

const Footer = () => {
  return (
    <Container>
      <Box component="footer" sx={(theme) => FooterContainer(theme)}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", textAlign: "center" }}
        >
          <Grid item xs={2.4}>
            <Tooltip title="Visit my LinkedIn page" placement="top">
              <Link
                href="https://www.linkedin.com/in/ayano-masuda/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit" // Changed from "black" to use the theme's contrast text color
                underline="hover"
              >
                <LinkedInIcon
                  sx={{
                    "&&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Link>
            </Tooltip>
          </Grid>
          <Grid item xs={2.4}>
            <Tooltip title="Visit my Instagram" placement="top">
              <Link
                href="https://www.instagram.com/ayanophotography.jp/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit" // Changed from "black" to use the theme's contrast text color
                underline="hover"
              >
                <InstagramIcon
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Link>
            </Tooltip>
          </Grid>
          <Grid item xs={2.4}>
            <Tooltip title="Visit my Facebook page" placement="top">
              <Link
                href="https://www.facebook.com/ayanophotography.nz"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit" // Changed from "black" to use the theme's contrast text color
                underline="hover"
              >
                <FacebookIcon
                  sx={{
                    "&&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Link>
            </Tooltip>
          </Grid>
          <Grid item xs={2.4}>
            <Tooltip title="Terms and Conditions" placement="top">
              <Link
                href="/termsandconditions"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit" // Changed from "black" to use the theme's contrast text color
                underline="hover"
              >
                <ArtTrackIcon
                  sx={{
                    "&&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Link>
            </Tooltip>
          </Grid>

          <Grid item xs={2.4}>
            <Tooltip title="Website by Frances Hughes" placement="top">
              <Link
                href="http://www.franceslhughes.com"
                alt="website by Frances Hughes"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
              >
                <CodeIcon
                  sx={{
                    "&&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Link>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
