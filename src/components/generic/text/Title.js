import React from "react";

import Text from "./Text";

// import { makeStyles } from "@material-ui/core/styles";

const Title = (props = {}) => {
  let children, size, underline;
  ({ children, size = 1, underline = false, ...props } = props);

  let Component = ["h1", "h2", "h4"][size];

  return (
    <Text Component={Component} underline={underline} {...props}>
      {children}
    </Text>
  );
};

export default Title;

/*

const Title = (props = {}) => {
    let children, size, className, align, marginBottom, centerXs;
    ({
        children,
        size = 0,
        className = "",
        align = "left",
        marginBottom = 0,
        centerXs = true,
        ...props
    } = props);

    let ComponentOptions = ["h1", "h2", "h4"];
    let Component = ComponentOptions[size];

    const classes = makeStyles((theme) => ({
        root: { textAlign: align, marginBottom: theme.spacing(marginBottom) },
    }))();

    const mobileXsClasses = centerXs ? "text-center-xs" : "";

    return (
        <Component className={`${className} ${classes.root} ${centerXsClass}`}>
            {children}
        </Component>
    );
};

export default Title;
*/
