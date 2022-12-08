import React, { useEffect, useState } from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieOrSeriePage, fetchAsyncMovieOrSeriePageCredits } from '../../features/movies/moviesSlice.js';
import { getMovieOrSeriePage, getMovieOrSeriePageCredits, removeSelectedMovieOrShow } from "../../features/movies/moviesSlice.js";

const labels = {
  0.5: 'Unacceptable',
  1: 'Horrible',
  1.5: 'Horrible',
  2: 'Execrable',
  2.5: 'Execrable',
  3: 'Mediocre',
  3.5: 'Mediocre',
  4: 'Poor',
  4.5: 'Poor',
  5: 'Forgettable',
  5.5: 'Forgettable',
  6: 'Good',
  6.5: 'Good',
  7: 'Great',
  7.5: 'Great',
  8: 'Excellent',
  8.5: 'Excellent',
  9: 'Awesome',
  9.5: 'Awesome',
  10: 'Masterpiece'
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const StyledTextField = styled(TextField)({
  "& label": {
    color: "#fff7c2"
  },
  "&:hover label": {
    fontWeight: 400
  },
  "& label.Mui-focused": {
    color: "#fff7c2"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff7c2"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff7c2",
      color: "#fff7c2"
    },
    "&:hover fieldset": {
      borderColor: "#fff7c2",
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff7c2"
    }
  }
});

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#fff7c2',
      contrastText: '#fff',
    },
  },
});

function MoviePage() {

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  

  //get url
  const { id } = useParams();
  // console.log(id);


  const dispatch = useDispatch();
  const data = useSelector(getMovieOrSeriePage);
  const creditsData = useSelector(getMovieOrSeriePageCredits);
  console.log(data);
  console.log(creditsData);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrSeriePage(id));
    dispatch(fetchAsyncMovieOrSeriePageCredits(id));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    }
  }, [dispatch, id]);

  // const foundDirector = creditsData.crew.find(element => element.job === "Director");

  return (
    <div style={{paddingTop: 10, marginLeft:5, marginRight: 5}}>
      {Object.keys(data && creditsData).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
      <Paper sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: '#1A2027',
            }}>
        <Grid container spacing={2}>
          <Grid item xs={12}  container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <ButtonBase sx={{ width: 300, height: 300 }} href={`https://image.tmdb.org/t/p/original/${data.poster_path}`}>
                    <Img alt="complex" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}/>
                </ButtonBase>
                <Typography gutterBottom variant="h4" component="div" sx={{color: "#94B49F", marginTop: 4}}>
                  {data.original_title}
                </Typography>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                  {/* {data && data.genres?.map((data, index) => (
                    <Typography variant="body2" gutterBottom sx={{color: "#FA9494"}} data={data} key={index}>
                      {data.name} &nbsp;
                    </Typography>
                  ))} */}
                </Grid>
                <Typography variant="subtitle1" gutterBottom color="text" sx={{color: "#ADDDD0", marginTop: 3}}>
                  {data.release_date}
                </Typography> 
                <Typography variant="subtitle1" gutterBottom color="text" sx={{color: "#ADDDD0"}}>
                  {data.runtime} min
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: "#F2D388", marginTop: 3}}>
                  "{data.tagline}"
                </Typography>
                  <Grid item sx={{paddingTop: 4}}>
                      <Rating
                        max={10}
                        // defaultValue={1}
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                      )}
                      <Tooltip title="Add To Favorites">
                        <IconButton aria-label="add to favorites" sx={{paddingTop: 3}}>
                          <FavoriteIcon fontSize="large"/>
                        </IconButton>
                      </Tooltip>
                  </Grid>
                  <Typography variant="body2" gutterBottom sx={{color: "#FFC4C4", marginTop: 3}}>
                    {data.overview}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom sx={{color: "#FA9494", textDecoration: "underline", marginTop: 3}}>
                    Cast:
                  </Typography>
                  <Grid container direction="row" justifyContent="center" alignItems="center">
                    {/* {creditsData && creditsData.cast?.map((data, index) => (
                      <Typography variant="body2" gutterBottom sx={{color: "#ADDDD0"}} data={data} key={index}>
                        {data.character}: {data.name} &nbsp;
                      </Typography>
                    ))} */}
                  </Grid>
                  <Typography variant="subtitle1" gutterBottom color="text" sx={{color: "#FA9494", textDecoration: "underline"}}>
                    Director:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{color: "#ADDDD0"}}>
                    {/* {data.foundDirector.name} */}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom sx={{color: "#FA9494", textDecoration: "underline"}}>
                    {/* {data === true && data.Country && data.Country.includes(",") ? "Countries:" : "Country:"} */}
                    Country:
                  </Typography>
                  <Grid container direction="row" justifyContent="center" alignItems="center">
                    {/* {data && data.production_countries.map((data, index) => (
                      <Typography variant="body2" gutterBottom sx={{color: "#ADDDD0"}} data={data} key={index}>
                        {data.name} &nbsp;
                      </Typography>
                    ))} */}
                  </Grid>
                  {/* {data && data.Awards !== 'N/A' ?
                    <div>
                      <Typography variant="body2" gutterBottom sx={{color: "#FA9494", textDecoration: "underline"}}>
                        Awards:
                      </Typography>
                      <Typography variant="body2" gutterBottom sx={{color: "#ADDDD0"}}>
                        {data.Awards}
                      </Typography>
                    </div> : <></> } */}
                  {/* {data && data.Rated !== 'N/A' ?
                    <div>
                      <Typography variant="body2" gutterBottom sx={{color: "#FA9494", textDecoration: "underline"}}>
                        Rated:
                      </Typography>
                      <Typography variant="body2" gutterBottom sx={{color: "#ADDDD0"}}>
                        {data.Rated}
                      </Typography>
                    </div> : <></> } */}
                  <Typography variant="subtitle1" gutterBottom sx={{color: "#FA9494", textDecoration: "underline"}}>
                  TMDB Rating:
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{color: "#ADDDD0"}}>
                    {data.vote_average}
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper   sx={{
                p: 2,
                margin: 'auto',
                marginTop: 2,
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: '#1A2027',
              }}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <StyledTextField
                id="outlined-textarea"
                label="Add a comment"
                multiline
                sx={{input: {color: "#FD841F"}}}/>
                <ThemeProvider theme={theme}>
                  <Button variant="outlined" color="neutral" sx={{marginLeft: 1}}>Send</Button>
                </ThemeProvider>
        </Grid>
      </Paper>
      </>
      )}
    </div>
  )
}

export default MoviePage