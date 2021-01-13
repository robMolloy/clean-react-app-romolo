import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import primary from "@material-ui/core/colors/lightBlue";
// import secondary from/*  */ "@material-ui/core/colors/orange";
import danger from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: { primary, secondary: { main: "#0e5176" } },
  status: { danger },
});

const grey = theme.palette.grey;
Object.assign(grey, { light: grey[200], main: grey[400], dark: grey[500] });

export default theme;
