import React from "react";
import SectionAlert from "../../generic/sections/SectionAlert";
import SectionDarkBg from "../../generic/sections/SectionDarkBg";
import makeStyles from "@material-ui/styles/makeStyles";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/Title";

const useStyles = makeStyles((theme) => ({
  root: { textAlign: "left" },
  title: { margin: "0" },
  sub: { textAlign: "left" },
}));

const Header = (props = {}) => {
  let children;
  ({ children } = props);
  const classes = useStyles();

  return (
    <>
      <SectionDarkBg className={classes.root}>
        <Container>
          <br />
          <Title size="0" className={classes.title}>
            {children}
          </Title>
          <br />
        </Container>
      </SectionDarkBg>
      <SectionAlert className={classes.sub}>
        <Container>{children}</Container>
      </SectionAlert>
    </>
  );
};

export default Header;
