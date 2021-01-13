import React from "react";

import MUIList from "@material-ui/core/List";

import SideBarLink from "./SideBarLink";

const SideBarLinkList = (props = {}) => {
  let array;
  ({ array = [], ...props } = props);

  return (
    <MUIList>
      {array.map((pageData, j) => {
        const { Icon, path, name } = pageData;

        return <SideBarLink key={j} {...{ Icon, path, name }} />;
      })}
    </MUIList>
  );
};

export default SideBarLinkList;
