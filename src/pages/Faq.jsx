import React from "react";
// import { Box, Typography, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <div className="faq-container w-full h-[calc(100vh-38px-8px-8px-20px)] mt-5">
      <Typography variant="h6" component="h6" className="text-white uppercase">
        FAQ
      </Typography>
      <p className="text-[#16a37f] text-xs">Frequently Asked Questions Page</p>
      <div className="pt-4 flex flex-col gap-4">
        <Accordion sx={{ background: "#252b36" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ color: "#16a37f" }}>
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff", fontSize: "13px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: "#252b36" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#16a37f" }}>
              Another Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff", fontSize: "13px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: "#252b36" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ color: "#16a37f" }}>
              Your Favourite Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff", fontSize: "13px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: "#252b36" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "#16a37f" }}>
              Some Random Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff", fontSize: "13px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: "#252b36" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ color: "#16a37f" }}>
              The Final Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff", fontSize: "13px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
