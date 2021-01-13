import React from "react";

import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import { makeStyles } from "@material-ui/core/styles";

const FlexibleGrid = (props = {}) => {
  let array, className, alignItems, justify, wrap;
  ({
    array,
    className = "",
    alignItems = "center",
    justify = "space-between",
    wrap,
    ...props
  } = props);

  const classes = makeStyles((theme) => ({ root: {} }))();

  return (
    <GridContainer
      className={`${classes.root} ${className}`}
      {...{ alignItems, justify, wrap }}
      {...props}
    >
      {array.map((child, j) => (
        <GridItem key={j}>{child}</GridItem>
      ))}
    </GridContainer>
  );
};

export default FlexibleGrid;
