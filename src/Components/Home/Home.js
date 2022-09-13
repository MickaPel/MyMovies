import React from 'react';
import {  useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


function Home() {

  const navigate = useNavigate();

  return (
    <div style= {{display:'flex', justifyContent:'center'}}>
      <Box sx={{ width: '100%', maxWidth: 500, marginTop: 30 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to MyMovies !!
        </Typography>
        <Typography variant="button" component={Button} onClick={() => navigate("/signup")} gutterBottom color="#e0bb20">
          Sign Up
        </Typography>
        <Typography variant="button" component={Button} onClick={() => navigate("/signin")} gutterBottom color="#e0bb20">
          Sign In
        </Typography>

      </Box>
    </div>
  )
}

export default Home