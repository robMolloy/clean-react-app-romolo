import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Title from "../text/Title";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";

// const useStyles = makeStyles((theme) => ({

const PlusAccordion = (props = {}) => {
  let children, summary, className, outline;
  ({ children, summary, className = "", outline = 0 } = props);

  let outlineOptions = ["outline_none", "outline_divider", ""];
  let outlineClassName = outlineOptions[outline];

  const classes = makeStyles((theme) => ({
    plus: { paddingRight: theme.spacing(1) },
  }))();

  return (
    <Accordion className={`${className} ${outlineClassName}`}>
      <AccordionSummary>
        <Box display="flex">
          <Title size={2} className={classes.plus}>
            +
          </Title>
          <Title align="left" flexGrow={1} size={2} centerXs={false}>
            {summary}
          </Title>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <div>{children}</div>
      </AccordionDetails>
    </Accordion>
  );
};

export default PlusAccordion;
