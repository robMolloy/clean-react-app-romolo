import React from "react";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/styles/makeStyles";
// import Link from "@material-ui/core/Link";
import Text from "../text/Text";

const LightAnchor = (props = {}) => {
  let children, className, underline, to;
  ({ children, className = "", to = "./", underline = true, ...props } = props);

  const classes = makeStyles((theme) => ({
    root: {
      color: "#FFFFFF",
      "&:hover": { textDecoration: underline ? "underline" : "" },
    },
  }))();

  return (
    <Link to={to} className={`${classes.root} ${className}`}>
      <Text>{children}</Text>
    </Link>
  );
};

export default LightAnchor;
