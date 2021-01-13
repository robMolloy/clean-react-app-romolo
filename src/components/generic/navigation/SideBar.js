import React from "react";

import MUIDrawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MUIDivider from "@material-ui/core/Divider";

import SideBarLinkList from "./SideBarLinkList";
import config from "../../../config";

const getGroupedPages = () => {
  let rtn = [];

  config.pages.forEach((pageData) => (rtn[pageData.order] = []));
  config.pages.forEach((pageData) => rtn[pageData.order].push(pageData));

  return rtn;
};

const SideBar = (props = {}) => {
  let side, state, toggleDrawer;
  ({ side = "left", state, toggleDrawer, ...props } = props);

  const classes = makeStyles({ list: { width: 250 } })();

  const groupedPages = getGroupedPages();

  return (
    <MUIDrawer anchor={side} open={state} onClose={toggleDrawer}>
      <div
        className={classes.list}
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        {...props}
      >
        {groupedPages.map((pageGroup, j) => (
          <React.Fragment key={j}>
            <SideBarLinkList {...{ toggleDrawer }} array={pageGroup} />
            {j === groupedPages.length - 1 ? "" : <MUIDivider />}
          </React.Fragment>
        ))}
      </div>
    </MUIDrawer>
  );
};

export default SideBar;
