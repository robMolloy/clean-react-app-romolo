import React from "react";

import MUIBox from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "../containers/Container";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      //   padding: theme.spacing(2),
    },
  };
});

const Section = (props = {}) => {
  let children, className, withContainer;
  ({ children, className = "", withContainer = false, ...props } = props);

  const Component = withContainer ? Container : React.Fragment;

  const classes = useStyles();

  return (
    <MUIBox className={`${className} ${classes.root}`} {...props}>
      <Component>{children}</Component>
    </MUIBox>
  );
};

export default Section;
