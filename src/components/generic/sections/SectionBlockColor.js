import React from "react";
import Section from "./Section";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    box: { padding: theme.spacing(2) },
  };
});

const SectionBlockColor = (props = {}) => {
  let children, bg, color;
  ({ children, bg, color, ...props } = props);

  const classes = useStyles();

  return (
    <Section
      className={classes.box}
      style={{ backgroundColor: bg, color }}
      {...props}
    >
      {children}
    </Section>
  );
};

export default SectionBlockColor;
