import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import Logo from "../components/Logo";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";

export default function PaymentScreen() {
  const navigate = useNavigate();
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          <Logo large></Logo>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3">
            Please follow the instruction on the PIN pad
          </Typography>
          <CircularProgress />
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => navigate("/complete")}
          variant="contained"
          color="primary"
          className={styles.largeButton}>
          Complete Order
        </Button>
      </Box>
    </Box>
  );
}
