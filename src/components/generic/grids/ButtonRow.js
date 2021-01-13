import React from "react";

import FlexibleGrid from "../../generic/grids/FlexibleGrid";

const ButtonRow = (props = {}) => {
  let spacing, justify, array;
  ({ spacing = 1, justify = "center", array = [], ...props } = props);

  return <FlexibleGrid {...{ spacing, justify, array, ...props }} />;
};

export default ButtonRow;
