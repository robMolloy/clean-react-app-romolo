import React from "react";
import MUIGrid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const GridContainer = (props = {}) => {
    let children, className, spacing, spacingY;
    ({
        children,
        className = "",
        spacing = 5,
        spacingY = spacing,
        ...props
    } = props);

    const classes = makeStyles((theme) => ({
        root: {},
        spacingY: {
            "& div.MuiGrid-item": {
                paddingTop: theme.spacing(spacingY / 2),
                paddingBottom: theme.spacing(spacingY / 2),
            },
        },
    }))();

    return (
        <MUIGrid
            container
            className={`${className} ${classes.root} ${classes.spacingY}`}
            spacing={spacing}
            {...props}
        >
            {children}
        </MUIGrid>
    );
};

export default GridContainer;
