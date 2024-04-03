import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import NavBar from "./components/NavBar";
import AllRoutes from "./routes/AllRoutes";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[50],
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <AllRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
