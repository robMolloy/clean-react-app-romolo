import React from "react";
import Button from "./Button";

const ButtonPrimary = (props = {}) => {
  let children;
  ({ children, ...props } = props);

  return (
    <Button color="primary" {...props}>
      {children}
    </Button>
  );
};

export default ButtonPrimary;
