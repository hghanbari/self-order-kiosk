import React, { useContext } from "react";
import { Store } from "../Store";
import { styles } from "../styles";
import Logo from "../components/Logo";
import { setPaymentType } from "../actions";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SelectPaymentScreen() {
  const { dispatch } = useContext(Store);

  const navigate = useNavigate();

  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    if (paymentType === "Pay here") {
      navigate("/payment");
    } else {
      navigate("/complete");
    }
  };

  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Logo large></Logo>
        <Typography
          className={styles.center}
          gutterBottom
          variant="h3"
          component="h3">
          Select payment type
        </Typography>
      </Box>
      <Box className={styles.cards}>
        <Card className={[styles.card, styles.space]}>
          <CardActionArea onClick={() => selectHandler("Pay here")}>
            <CardMedia
              component="img"
              alt="Pay here"
              image="/images/payhere.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p">
                PAY HERE
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={[styles.card, styles.space]}>
          <CardActionArea onClick={() => selectHandler("At counter")}>
            <CardMedia
              component="img"
              alt="At counter"
              image="/images/atcounter.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p">
                AT COUNTER
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
