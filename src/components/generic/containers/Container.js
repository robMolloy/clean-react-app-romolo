import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIContainer from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // textAlign: "center",
      // maxWidth: "720px",
    },
  };
});

const Container = (props = {}) => {
  let children, className, maxWidth;
  ({ children, className = "", maxWidth = "md", ...props } = props);
  const classes = useStyles();

  return (
    <MUIContainer
      className={`${className} ${classes.root}`}
      maxWidth={maxWidth}
      // style={{ padding: `0 ${border * 8}px}` }}
      {...props}
    >
      {children}
    </MUIContainer>
  );
};

export default Container;
