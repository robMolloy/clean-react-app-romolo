import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";

const Form = ({ children, ...props }) => {
    const classes = makeStyles((theme) => ({
        root: {
            width: "100%",
            marginTop: theme.spacing(1),
        },
    }))();

    return (
        <form noValidate {...props} className={classes.root}>
            {children}
        </form>
    );
};

export default Form;
