import { Box, CardActionArea, Typography, Card } from "@mui/material";
import React from "react";
import { TouchApp } from "@mui/icons-material";
import { styles } from "../styles";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea onClick={() => navigate("/choose")}>
        <Box className={[styles.root, styles.red]}>
          <Box className={[styles.main, styles.center]}>
            <Typography component="h6" variant="h6">
              Fast & Easy
            </Typography>
            <Typography component="h1" variant="h1">
              Order <br /> & pay <br /> here
            </Typography>
            <TouchApp fontSize="large"></TouchApp>
          </Box>
          <Box className={[styles.green, styles.center]}>
            <Logo large></Logo>
            <Typography component="h5" variant="h5">
              Touch to start
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
