import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "70%",
      margin: "0 auto",
    },
  };
});

const InnerContainer = (props = {}) => {
  let children, className;
  ({ children, className = "", ...props } = props);
  const classes = useStyles();

  return (
    <div className={`${className} ${classes.root}`} {...props}>
      {children}
    </div>
  );
};

export default InnerContainer;
