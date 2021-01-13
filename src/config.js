import Home from "./components/pages/Home";

import HomeIcon from "@material-ui/icons/Home";

const config = {
  pages: [
    {
      order: "0",
      path: "home",
      name: "Home",
      Component: Home,
      Icon: HomeIcon,
    },
  ],
};

export default config;
