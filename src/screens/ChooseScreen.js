import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Logo from "../component/Logo";
import { styles } from "../styles";
import { Store } from "../Store";
import { setOrderType } from "../actions";
import { useNavigate } from "react-router-dom";

export default function ChooseScreen() {
  const navigate = useNavigate();
  const { dispatch } = useContext(Store);

  const chooseHandler = (orderType) => {
    setOrderType(dispatch, orderType);
    navigate("/order");
  };
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            variant="h3"
            component="h3"
            className={styles.center}
            gutterBottom>
            Where will you be eating today?
          </Typography>
          <Box className={styles.cards}>
            <Card className={styles.card}>
              <CardActionArea onClick={() => chooseHandler("Eat in")}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="/images/eatin.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    color="textPrimary"
                    component="p"
                    variant="h4">
                    Eat In
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={styles.card}>
              <CardActionArea onClick={() => chooseHandler("Take out")}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="/images/takeout.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    color="textPrimary"
                    component="p"
                    variant="h4">
                    Take out
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
