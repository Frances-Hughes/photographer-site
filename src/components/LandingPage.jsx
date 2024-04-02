import React from "react";
import {
  Box,
  Typography,
  CssBaseline,
  styled,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Custom theme to incorporate the 'Fraunces' font
const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Helvetica",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(","),
    h1: {
      fontFamily: "'Fraunces', serif",
      fontWeight: 900,
      fontSize: "64px",
      textTransform: "uppercase",
      textAlign: "center",
      color: "black", // Fallback color
      textFillColor: "transparent",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
    },
    h2: {
      fontFamily: "'Fraunces', serif",
    },
  },
});

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "200vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* First container */}
        <Box
          sx={{
            clip: "rect(0, auto, auto, 0)",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            height: "100vh",
            left: 0,
            width: "100%",
            bgcolor: "white",
            WebkitMaskImage:
              "-webkit-linear-gradient(top, #ffffff 0%, #ffffff 100%)",
            "& .title_wrapper": {
              position: "fixed",
              top: "50%",
              width: "100%",
              transform: "translateY(-50%)",
            },
          }}
        >
          <Box className="title_wrapper">
            <Typography
              variant="h1"
              sx={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1575058752200-a9d6c0f41945?&q=85)",
                backgroundSize: "100vw auto",
                backgroundPosition: "center",
              }}
            >
              Ayano Masuda Photography
            </Typography>
          </Box>
        </Box>

        {/* Second container */}
        <Box
          sx={{
            clip: "rect(0, auto, auto, 0)",
            overflow: "hidden",
            position: "absolute",
            top: "100vh",
            height: "100vh",
            left: 0,
            width: "100%",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1575058752200-a9d6c0f41945?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)",
            backgroundSize: "100vw auto",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            "& .title_wrapper": {
              position: "fixed",
              top: "50%",
              width: "100%",
              transform: "translateY(-50%)",
              color: "white",
            },
          }}
        >
          <Box className="title_wrapper white">
            <Typography
              variant="h1"
              sx={{
                zIndex: "5",
                bgcolor: "white",
                opacity: 1,
                backgroundColor: "white",
              }}
            >
              Ayano Masuda Photography
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          padding: "2em",
          margin: "auto",
          maxWidth: "800px",
          "& h2": { fontFamily: "'Fraunces', serif" },
          "& p": {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          },
        }}
      >
        <Typography variant="h2">Lorem ipsum dolor sit amet.</Typography>
        <Typography paragraph>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>
        <Typography paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
