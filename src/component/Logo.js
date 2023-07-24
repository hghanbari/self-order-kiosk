import React from "react";
import { useStyles } from "../styles";
export default function Logo() {
  const stayles = useStyles();
  return (
    <img
      src="/images/logo.png"
      alt="Food order"
      className={stayles.largeLogo}
    />
  );
}
