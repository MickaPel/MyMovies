// import React, { useEffect, useState } from 'react'
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// import MovieCard from './MovieCard.js';

// import { useSelector } from "react-redux";
// import { useDispatch } from 'react-redux';
// import { fetchAsyncMovies,
//   // fetchAsyncSeries 
// } from '../../features/movies/moviesSlice';
// import { getAllMovies, getAllSeries } from "../../features/movies/moviesSlice.js";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'white',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   height: 100,
//   border: 'none',
//   boxShadow: "none"
// }));

// function Categories() {

//   // const movies = useSelector(getAllMovies);
//   // console.log(movies);

//   const dispatch = useDispatch();
//   const movies = useSelector(getAllMovies);
//     console.log(movies);

//   useEffect(() => {
//     dispatch(fetchAsyncMovies());
//   }, [dispatch]);

    
//     const series = useSelector(getAllSeries);
//     // let renderMovies = "";

  
//     let renderMovies =
//       // movies.Response === "True" ? (
//       //   movies.Search.map((movie, index) => (
//           <div>
//         <Grid container spacing={{ xs: 2, md: 2, lg: 2, xl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {movies.results.map((movie, index) => (
//           <Grid item xs={2} sm={2} md={2} lg={2} xl={1} key={index}>
//               <MovieCard key={index} data={movie} />
//             </Grid>
//           ))}
//         </Grid>
//         </div>
          
//         // ))
//       // ) : (
//       //   <div className="movies-error">
//       //     <h3>{movies.Error}</h3>
//       //   </div>
//       // );

//     let renderSeries =
//       series.Response === "True" ? (
//       //   movies.Search.map((movie, index) => (
//           <div>
//         <Grid container spacing={{ xs: 2, md: 2, lg: 2, xl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {series.Search.map((movie, index) => (
//           <Grid item xs={2} sm={2} md={2} lg={2} xl={1} key={index}>
//               <MovieCard key={index} data={movie} />
//             </Grid>
//           ))}
//         </Grid>
//         </div>
          
//         // ))
//       ) : (
//         <div className="movies-error">
//           <h3>{movies.Error}</h3>
//         </div>
//       );

//   return (
//     <div>
//       <Box sx={{ flexGrow: 1, margin: 1, color:"#f0f69f"}}>
//                     {renderMovies}
//                     {renderSeries}
//       </Box>
//     </div>
//   )
// }

// export default Categories

import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/moviesSlice";
import MovieCard from "./MovieCard";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies)
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.results.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  // renderShows =
  //   shows.Response === "True" ? (
  //     shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  //   ) : (
  //     <div className="shows-error">
  //       <h3>{shows.Error}</h3>
  //     </div>
  //   );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      {/* <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div> */}
    </div>
  );
};

export default MovieListing;