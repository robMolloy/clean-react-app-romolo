import React from "react";
import Box from "./Section";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    box: { backgroundColor: "#FFFFFF00", padding: theme.spacing(2) },
  };
});

const SectionLightBg = (props) => {
  let children;
  ({ children, ...props } = props);

  const classes = useStyles();

  return (
    <Box className={classes.box} {...props}>
      {children}
    </Box>
  );
};

export default SectionLightBg;
