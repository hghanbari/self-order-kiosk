import { styled } from "@mui/material/styles";

const cssClasses = {
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navy: {
    backgroundColor: "#003080",
  },
  red: {
    backgroundColor: "#ff2040",
    color: "#ffffff",
  },
  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  green: {
    backgroundColor: "#00b020",
  },
  largeLogo: {
    height: 100,
  },
  logo: {
    height: 50,
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: { margin: 10 },
  title: {
    marginTop: 18,
  },
  space: {
    padding: 10,
  },
  media: { width: 200 },
  largeButton: {
    width: 250,
  },
  largeInput: {
    // width: "60px!important",
    padding: "0!important",
    fontSize: "35px!important",
    textAlign: "center!important",
    padding: 0,
  },
  bordered: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    borderStyle: "solid",
  },
  row: {
    display: "flex",
    padding: 10,
  },
  around: {
    justifyContent: "space-around",
  },
  between: {
    justifyContent: "space-between",
  },
  column: { flexDirection: "column" },
};

const classes = {};
for (const key in cssClasses) {
  classes["." + key] = cssClasses[key];
}

const styles = {};

for (const key in cssClasses) {
  styles[key] = key;
}

const Root = styled("div")(({ theme }) => classes);

export { styles, Root };
