import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: "16px",
      textAlign: "left",
      backgroundColor: theme.palette.primary.light,
    },
    text: { padding: theme.spacing(2), paddingTop: 0, color: "#FFFFFF" },
    img: {
      width: "100%",
    },
  };
});

const Tablet = (props = {}) => {
  let children, className, imgSrc;
  ({ children, className = "", imgSrc = "", ...props } = props);

  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className}`}>
      <div>
        <img src={imgSrc} alt="" className={classes.img} />
      </div>
      <div className={classes.text}>{children}</div>
    </div>
  );
};

export default Tablet;
