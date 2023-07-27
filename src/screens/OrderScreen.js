import React, { useEffect, useContext } from "react";
import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import Logo from "../component/Logo";
import { styles } from "../styles";
import { listCategories } from "../action";
import { Store } from "../Store";

export default function OrderScreen() {
  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.categoryList;
  useEffect(() => {
    listCategories(dispatch);
  }, [dispatch]);
  return (
    <Box className={styles.root}>
      <Box className={styles.main}>
        <Grid container>
          <Grid md={2} item>
            <List>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <>
                  <ListItem button>
                    <Logo l></Logo>
                  </ListItem>
                  {categories.map((category) => (
                    <ListItem button key={category.name}>
                      <Avatar alt={category.name} src={category.image} />
                    </ListItem>
                  ))}
                </>
              )}
            </List>
          </Grid>
          <Grid item md={10}>
            Food list
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
