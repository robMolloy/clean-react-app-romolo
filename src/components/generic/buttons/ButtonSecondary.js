import React from "react";
import Button from "./Button";

const ButtonSecondary = (props = {}) => {
  let children;
  ({ children, ...props } = props);

  return (
    <Button color="secondary" {...props}>
      {children}
    </Button>
  );
};

export default ButtonSecondary;
