import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import NavBar from "./components/NavBar";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#111315",
      light: "#363B40",
      dark: "#111315",
    },
    background: {
      default: "#111315",
      paper: "#363B40",
    },
    text: {
      primary: "#ffffff",
      secondary: grey[500],
      disabled: grey[600],
    },
  },
  typography: {
    fontFamily: '"Yuji Syuku", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900, // Use the heaviest weight supported by "Yuji Syuku", or 900 as a fallback
      fontSize: "42px",
      textTransform: "uppercase",
      textAlign: "center",
      color: "white", // Fallback color
      textFillColor: "transparent",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      textShadow: "2px 2px 0px rgba(0,0,0,0.2)", // Faux bold effect
      letterSpacing: "2px", // Makes text wider
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
  },
});

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <AllRoutes />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
