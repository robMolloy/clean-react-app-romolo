import React from "react";
import Box from "./Section";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundPosition: "center",
      backgroundSize: "cover;",
      color: "#FFFFFF",
    },
  };
});

const SectionSingleImageBg = (props = {}) => {
  let children, bg;
  ({ children, bg, ...props } = props);

  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      style={{ backgroundImage: `url(${bg})` }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default SectionSingleImageBg;
