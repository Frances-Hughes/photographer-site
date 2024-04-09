import React from "react";
import { Box, Container, Link, Grid, Tooltip } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
          <Grid item xs={6}>
            <Tooltip title="Visit my LinkedIn page" placement="top">
              <Link
                href="https://www.linkedin.com/in/frances-l-hughes/"
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
          <Grid item xs={6}>
            <Tooltip title="Link to this repository" placement="top">
              <Link
                href="/termsandconditions"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit" // Changed from "black" to use the theme's contrast text color
                underline="hover"
              >
                <GitHubIcon
                  sx={{
                    "&:hover": {
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
