import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";

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
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
