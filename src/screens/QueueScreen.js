import React, { useContext, useEffect } from "react";
import { Store } from "../Store";
import { styles } from "../styles";
import { listQueue } from "../actions";
import {
  Box,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Paper,
  Alert,
  Typography,
} from "@mui/material";

export default function QueueScreen() {
  const { state, dispatch } = useContext(Store);
  const { queue, loading, error } = state.queueList;

  useEffect(() => {
    listQueue(dispatch);
  }, [dispatch]);

  return (
    <Box className={[styles.root]}>
      <Box className={[styles.main]}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Paper>
                <Typography variant="h2">In Progress</Typography>
                <List>
                  {queue.inProgressOrders.map((order) => (
                    <ListItem key={order.number}>
                      <Typography variant="h2">{order.number}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper>
                <Typography variant="h2">Now Serving</Typography>
                <List>
                  {queue.servingOrders.map((order) => (
                    <ListItem key={order.number}>
                      <Typography variant="h2">{order.number}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
