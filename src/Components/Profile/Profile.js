import React from 'react';
import {  useNavigate } from "react-router-dom";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


function Profile() {

  const navigate = useNavigate();

  return (
    <div style={{display:'flex', flexDirection:'column', maxWidth: 500, margin:'auto', backgroundColor:"transparent"}}>
      <Typography sx={{marginTop:5}} variant="h5" gutterBottom color="#e0bb20">
        Bonjour [nom]
      </Typography>
      <Typography sx={{marginTop:2}} variant="button" component={Button} onClick={() => navigate("/")} gutterBottom color="#FF4C29">
        Deconexion
      </Typography>
      <Accordion sx={{backgroundColor:'#181820', color:'#B2B1B9'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Informations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:'#181820', color:'#B2B1B9'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>My categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:'#181820', color:'#B2B1B9'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>My ratings</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion sx={{backgroundColor:'#181820', color:'#B2B1B9'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>My favorites</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  )
}

export default Profile