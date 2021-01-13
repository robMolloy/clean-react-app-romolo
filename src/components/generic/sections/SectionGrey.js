import React from "react";

import useTheme from "@material-ui/core/styles/useTheme";
import SectionBlockColor from "./SectionBlockColor";

const SectionGrey = (props = {}) => {
  let children, bgQty, color;
  ({ children, bgQty = 100, color } = props);

  const theme = useTheme();

  return (
    <SectionBlockColor bg={theme.palette.grey[bgQty]} color={color}>
      {children}
    </SectionBlockColor>
  );
};

export default SectionGrey;
