import React from "react";
import Box from "./Section";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundPosition: "center",
      backgroundSize: "100% auto;",
      color: "#FFFFFF",
    },
  };
});

const ImgBox = (props = {}) => {
  let children, bg, className;
  ({ children, bg, className = "", ...props } = props);

  const classes = useStyles();

  return (
    <Box
      className={`${className} ${classes.root}`}
      style={{ backgroundImage: `url(${bg})` }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ImgBox;
