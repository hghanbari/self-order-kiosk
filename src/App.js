import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import HomeScreen from "./screens/HomeScreen";

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontWeight: "bold",
      fontSize: "2rem",
      color: "black",
    },
  },
  palette: {
    primary: { main: "#ff1744" },
    secondary: {
      main: "#118e16",
      contrastText: "#ffffff",
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <HomeScreen></HomeScreen>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
