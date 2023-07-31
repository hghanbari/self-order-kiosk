import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./styles";
import OrderScreen from "./screens/OrderScreen";
import HomeScreen from "./screens/HomeScreen";
import ChooseScreen from "./screens/ChooseScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SelectPaymentScreen from "./screens/SelectPaymentScreen";
import PaymentScreen from "./screens/PaymentScreen";
import CompleteOrderScreen from "./screens/CompleteOrderScreen";
import AdminScreen from "./screens/AdminScreen";
import { Store } from "../src/Store";
import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import QueueScreen from "./screens/QueueScreen";

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
  const { state } = useContext(Store);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? "lg" : "sm"}>
          <Root>
            <Paper>
              <Routes>
                <Route path="/queue" element={<QueueScreen />} />
                <Route path="/admin" element={<AdminScreen />} />
                <Route path="/complete" element={<CompleteOrderScreen />} />
                <Route path="/payment" element={<PaymentScreen />} />
                <Route path="/review" element={<ReviewScreen />} />
                <Route path="/order" element={<OrderScreen />} />
                <Route path="/choose" element={<ChooseScreen />} />
                <Route path="/" element={<HomeScreen />} />
                <Route
                  path="/select-payment"
                  element={<SelectPaymentScreen />}
                />
              </Routes>
            </Paper>
          </Root>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
