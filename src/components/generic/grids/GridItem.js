import React from "react";
import MUIGrid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // padding: theme.spacing(2)
    },
  };
});

const GridItem = (props = {}) => {
  // console.log(props);

  let children, className;
  ({ children, className = "", ...props } = props);
  const classes = useStyles();

  return (
    <MUIGrid item className={`${className} ${classes.root}`} {...props}>
      {children}
    </MUIGrid>
  );
};

export default GridItem;
