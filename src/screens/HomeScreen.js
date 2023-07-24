import { Box, CardActionArea, Typography, Card } from "@mui/material";
import React from "react";
import { TouchApp } from "@mui/icons-material";
import { useStyles } from "../styles";
import Logo from "../component/Logo";

export default function HomeScreen() {
  const stayles = useStyles();
  return (
    <Card>
      <CardActionArea>
        <Box className={[stayles.root, stayles.red]}>
          <Box className={[stayles.main, stayles.center]}>
            <Typography component="h6" variant="h6">
              Fast & Easy
            </Typography>
            <Typography component="h1" variant="h1">
              Order <br /> & pay <br /> here
            </Typography>
            <TouchApp fontSize="large"></TouchApp>
          </Box>
          <Box className={[stayles.green, stayles.center]}>
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
