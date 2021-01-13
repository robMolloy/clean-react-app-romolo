import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Br from "./Br";

const Text = (props = {}) => {
    let children,
        className,
        align,
        xsOverride,
        gutterBottom,
        Component,
        underline;

    ({
        children,
        className = "",
        align = "left",
        xsOverride = [],
        gutterBottom = false,
        Component = "p",
        underline = false,
        ...props
    } = props);

    const classes = makeStyles((theme) => ({
        root: {
            textAlign: align,
            borderBottom: underline
                ? `1px solid ${theme.palette.grey.main}`
                : "none",
        },
    }))();

    const xsClasses = xsOverride.map((opt) => `xs-style-${opt}`).join(" ");

    return (
        <>
            <Component
                className={`${className} ${classes.root} ${xsClasses}`}
                {...props}
            >
                {children}
            </Component>
            {gutterBottom && <Br />}
        </>
    );
};

export default Text;
