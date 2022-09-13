import React, { useState } from 'react'

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




import gladiator from "../Images/gladiator.jpg"


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

  return (
    <div style={{paddingTop: 10, marginLeft:5, marginRight: 5}}>
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
                <ButtonBase sx={{ width: 300, height: 300 }}>
                  <Img alt="complex" src={gladiator} />
                </ButtonBase>
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
                  <Typography gutterBottom variant="subtitle1" component="div">
                    [nom film]
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    [année]
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    [budget]
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    [boxoffice]
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    [cast]
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    [synopsis]
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
                multiline/>
                <ThemeProvider theme={theme}>
            <Button variant="outlined" color="neutral" sx={{marginLeft: 1}}>Send</Button>
            </ThemeProvider>
        </Grid>
      </Paper>
    </div>
  )
}

export default MoviePage