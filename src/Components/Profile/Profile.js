import React, { useEffect, useState } from 'react';
import {  useNavigate } from "react-router-dom";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

import { signOut } from 'firebase/auth' 
import { auth } from '../Firebase/firebase'
import { useAuthValue } from "../../AuthContext"
import {onAuthStateChanged} from 'firebase/auth'


function Profile() {

  //navigation
  const navigate = useNavigate();

  //user status
  const {currentUser} = useAuthValue();

  const [currentUser1, setCurrentUser1] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser1(user)
    })
  }, [])

  //signout
  const signOutUser = () => {
    signOut(auth);
    navigate("/");
  }

  return currentUser1 !== null ? (
    <div style={{display:'flex', flexDirection:'column', maxWidth: 500, margin:'auto', backgroundColor:"transparent"}}>
      <Typography sx={{marginTop:5}} variant="h5" gutterBottom color="#e0bb20">
        Bonjour  {currentUser.displayName}
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
          {currentUser.email}
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

      <Typography sx={{marginTop:2}} variant="button" component={Button} onClick={signOutUser} gutterBottom color="#FF4C29">
        Deconexion
      </Typography>
    </div>
  ) : (
    <div style= {{display:'flex', justifyContent:'center'}}>
      <Box sx={{ width: '100%', maxWidth: 500, marginTop: 30 }}>
      <Typography sx={{marginTop:5}} variant="h5" gutterBottom color="#e0bb20">
      You are not connected
      </Typography>
      <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
        <Typography variant="button" component={Button} onClick={() => navigate("/signup")} gutterBottom color="#C98474">
          Sign Up
        </Typography>
        <Typography variant="button" gutterBottom color="#e0bb20">
        or
        </Typography>
        <Typography variant="button" component={Button} onClick={() => navigate("/signin")} gutterBottom color="#C98474">
          Sign In
        </Typography>
        </Grid>

      </Box>
    </div>
  )
}

export default Profile