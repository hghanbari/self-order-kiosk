import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import HomeScreen from "./screens/HomeScreen";
import ChooseScreen from "./screens/ChooseScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./styles";
import OrderScreen from "./screens/OrderScreen";
import ReviewScreen from "./screens/ReviewScreen";

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Root>
            <Paper>
              <Routes>
                <Route path="/review" element={<ReviewScreen />} />
                <Route path="/order" element={<OrderScreen />} />
                <Route path="/choose" element={<ChooseScreen />} />
                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Paper>
          </Root>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
