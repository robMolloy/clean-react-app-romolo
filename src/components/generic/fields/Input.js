import React from "react";
import { TextField } from "@material-ui/core/";
import makeStyles from "@material-ui/styles/makeStyles";

const Input = React.forwardRef((props = {}, ref) => {
    let helperText;
    ({ helperText = "", ...props } = props);

    const classes = makeStyles((theme) => ({
        root: {},
        input: {
            backgroundColor: `${theme.palette.grey.light}`,
            "&:focus": { backgroundColor: `${theme.palette.grey[50]}` },
        },
        label: { zIndex: "1", color: theme.palette.grey.dark },
    }))();

    return (
        <TextField
            className={classes.root}
            fullWidth
            size="medium"
            inputRef={ref}
            inputProps={{ className: classes.input }}
            InputLabelProps={{ className: classes.label }}
            variant="filled"
            helperText={helperText}
            {...props}
        />
    );
});

export default Input;
