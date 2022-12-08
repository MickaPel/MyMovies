// import React, { useEffect } from 'react';
// import {  useNavigate } from "react-router-dom";
// import { useAuthValue } from "../../AuthContext";

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';
// import Grid from '@mui/material/Grid';
// // import { useDispatch } from 'react-redux';
// // import { fetchAsyncMovies,
// //   //  fetchAsyncSeries
// // } from '../../features/movies/moviesSlice';


// function Home() {

//   //navigation
//   const navigate = useNavigate();

//   //user status
//   const {currentUser} = useAuthValue();

//   //
//   // const dispatch = useDispatch();

//   // useEffect (() => {
//   //     dispatch(fetchAsyncMovies());
//   //     // dispatch(fetchAsyncSeries());
//   // }, [dispatch]);

//   return currentUser === null ? (
//     <div style= {{display:'flex', justifyContent:'center'}}>
//       <Box sx={{ width: '100%', maxWidth: 500, marginTop: 30 }}>
//         <Typography variant="h4" gutterBottom color="#e0bb20">
//           Welcome to MyMovies !!
//         </Typography>
//         <Grid
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//         >
//         <Typography variant="button" component={Button} onClick={() => navigate("/signup")} gutterBottom color="#C98474">
//           Sign Up
//         </Typography>
//         <Typography variant="button" gutterBottom color="#e0bb20">
//         or
//         </Typography>
//         <Typography variant="button" component={Button} onClick={() => navigate("/signin")} gutterBottom color="#C98474">
//           Sign In
//         </Typography>
//         </Grid>

//       </Box>
//     </div>
//   ) : (
//     <div style= {{display:'flex', justifyContent:'center'}}>
//       <Box sx={{ width: '100%', maxWidth: 500, marginTop: 30 }}>
//         <Typography variant="h4" gutterBottom color="#e0bb20">
//           Page de contenu
//         </Typography>

//       </Box>
//     </div>
//   )
// }

// export default Home

import React, { useEffect } from "react";
import Categories from "../Categories/Categories";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
} from "../../features/movies/moviesSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <Categories />
    </div>
  );
};

export default Home;