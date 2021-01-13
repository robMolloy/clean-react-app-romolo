import React from "react";

import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return { root: {} };
});

const GridColumnToRow = (props = {}) => {
  let array, className, alignItems, justify, wrap, xs;
  ({
    array,
    className = "",
    alignItems,
    justify,
    wrap,
    xs = 12,
    ...props
  } = props);

  const columnSize = Math.floor(12 / array.length);

  const classes = useStyles();

  return (
    <GridContainer
      className={`${classes.root} ${className}`}
      {...{ alignItems, justify, wrap, ...props }}
    >
      {array.map((child, j) => (
        <GridItem xs={xs} sm={columnSize} key={j}>
          {child}
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default GridColumnToRow;
