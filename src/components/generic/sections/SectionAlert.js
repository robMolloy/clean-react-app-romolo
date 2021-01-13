import React from "react";
import SectionBlockColor from "./SectionBlockColor";

import useTheme from "@material-ui/core/styles/useTheme";

const SectionAlert = (props = {}) => {
  let children;
  ({ children, ...props } = props);

  // const classes = useStyles();
  const theme = useTheme();

  return (
    <SectionBlockColor
      // className={classes.box}
      bg={theme.palette.primary.light}
      color="#FFFFFF"
      {...props}
    >
      {children}
    </SectionBlockColor>
  );
};

export default SectionAlert;
