import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import NavBar from "./components/NavBar";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: "dark", // Use dark mode
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
      primary: "#ffffff", // White text for primary text
      secondary: grey[500], // A lighter shade for secondary text, adjust as needed
      disabled: grey[600], // For disabled text, adjust as needed
    },
  },
  typography: {
    fontFamily: 'Poppins, "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "6rem",
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
