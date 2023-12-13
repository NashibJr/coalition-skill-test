import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({ title, children }) => {
  return (
    <div>
      <Accordion
        style={{
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, .2)",
        }}
        sx={{ backgroundColor: "none", opacity: 0.7 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="uppercase text-sm font-extrabold text-[#414F6B]">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="-mt-4">{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
