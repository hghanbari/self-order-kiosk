import React from "react";
import { styles } from "../styles";
export default function Logo(props) {
  return (
    <img
      src="/images/logo.png"
      alt="Food order"
      className={props.large ? styles.largeLogo : styles.logo}
    />
  );
}
