import React from "react";
import { Link } from "react-router-dom";

import MUIListItem from "@material-ui/core/ListItem";
import MUIListItemIcon from "@material-ui/core/ListItemIcon";
import MUIListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import makeStyles from "@material-ui/styles/makeStyles";

const SideBarLink = (props = {}) => {
  let Icon, path, name;
  ({ Icon = MailIcon, path, name, ...props } = props);

  const classes = makeStyles((theme) => ({
    root: { padding: 0, height: theme.spacing(6) },
    link: {
      padding: `0 ${theme.spacing(2)}px`,
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
    },
    icon: {},
    text: {
      textDecoration: "none",
      color: theme.palette.grey.dark,
      // "&:hover": {},
    },
  }))();

  return (
    <MUIListItem button className={classes.root}>
      <Link to={`/${path}`} className={classes.link}>
        <MUIListItemIcon className={classes.icon}>
          <Icon />
        </MUIListItemIcon>
        <MUIListItemText primary={name} className={classes.text} />
      </Link>
    </MUIListItem>
  );
};

export default SideBarLink;
