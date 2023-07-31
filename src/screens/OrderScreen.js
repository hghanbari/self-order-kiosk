import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../components/Logo";
import { Store } from "../Store";
import { styles, Root } from "../styles";
import { useNavigate } from "react-router-dom";
import {
  addToOrder,
  clearOrder,
  listCategories,
  listProducts,
  removeFromOrder,
} from "../actions";
import {
  Avatar,
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogTitle,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

export default function OrderScreen() {
  const [categoryName, setCategoryName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  const closeHandler = () => {
    setIsOpen(false);
  };

  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };

  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setIsOpen(false);
  };
  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setIsOpen(false);
  };

  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.categoryList;
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;

  const { orderItems, itemsCount, totalPrice, taxPrice, orderType } =
    state.order;

  useEffect(() => {
    if (!categories) {
      listCategories(dispatch);
    } else {
      listProducts(dispatch, categoryName);
    }
  }, [dispatch, categories, categoryName]);

  const categoryClickHandler = (name) => {
    setCategoryName(name);
    listProducts(dispatch, categoryName);
  };

  const previewOrderHandler = () => {
    navigate(`/review`);
  };
  console.log(products);
  return (
    <Box className={styles.root}>
      <Dialog
        maxWidth="sm"
        fullWidth={true}
        open={isOpen}
        onClose={closeHandler}>
        <Root>
          <DialogTitle className={styles.center}>
            Add {product.name}
          </DialogTitle>
          <Box className={[styles.row, styles.around]}>
            <Button
              variant="contained"
              color="primary"
              disabled={quantity === 1}
              onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}>
              <RemoveIcon />
            </Button>
            <TextField
              className={styles.largeInput}
              InputProps={{
                bar: true,
                inputProps: {
                  className: styles.largeInput,
                },
              }}
              type="number"
              variant="filled"
              min={1}
              value={quantity}
              disabled
            />
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => setQuantity(quantity + 1)}>
              <AddIcon />
            </Button>
          </Box>
          <Box className={[styles.row, styles.between]}>
            <Button
              onClick={cancelOrRemoveFromOrder}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}>
              {orderItems.find((x) => x.name === product.name)
                ? "Remove From Order"
                : "Cancel"}
            </Button>
            <Button
              onClick={addToOrderHandler}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}>
              ADD To Order
            </Button>
          </Box>
        </Root>
      </Dialog>
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
                  <ListItem onClick={() => categoryClickHandler("")} button>
                    <Logo></Logo>
                  </ListItem>
                  {categories.map((category) => (
                    <ListItem
                      button
                      key={category._id}
                      onClick={() => categoryClickHandler(category.name)}>
                      <Avatar alt={category.name} src={category.image} />
                    </ListItem>
                  ))}
                </>
              )}
            </List>
          </Grid>
          <Grid item md={10}>
            <Typography
              gutterBottom
              className={styles.title}
              variant="h2"
              component="h2">
              {categoryName || "Main Menu"}
            </Typography>
            <Grid container spacing={1}>
              {loadingProducts ? (
                <CircularProgress />
              ) : errorProducts ? (
                <Alert severity="error">{errorProducts}</Alert>
              ) : (
                products.map((product) => (
                  <Grid item md={6} key={product._id}>
                    <Card
                      className={styles.card}
                      onClick={() => productClickHandler(product)}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={product.name}
                          image={product.image}
                          className={styles.media}
                        />
                      </CardActionArea>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="textPrimary"
                          component="p">
                          {product.name}
                        </Typography>
                        <Box className={styles.cardFooter}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p">
                            {product.calorie} Cal
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p">
                            ${product.price}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Box>
          <Box className={[styles.bordered, styles.space]}>
            My Order - {orderType} | Tax: ${taxPrice} | Total: ${totalPrice} |
            Items: {itemsCount}
          </Box>
          <Box className={[styles.row, styles.around]}>
            <Button
              onClick={() => {
                clearOrder(dispatch);
                navigate(`/`);
              }}
              variant="contained"
              color="primary"
              className={styles.largeButton}>
              Cancel Order
            </Button>
            <Button
              onClick={previewOrderHandler}
              variant="contained"
              color="primary"
              disabled={orderItems.length === 0}
              className={styles.largeButton}>
              Done
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
