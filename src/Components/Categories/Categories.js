import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 100,
  border: 'none',
  boxShadow: "none"
}));

function Categories() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: 1, color:"#f0f69f"}}>
        <Typography>Categorie 1</Typography>
        <Grid container spacing={{ xs: 2, md: 2, lg: 2, xl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={2} sm={2} md={2} lg={2} xl={1} key={index}>
              <Item>fiche film</Item>
            </Grid>
          ))}
        </Grid>
        <Typography>Categorie 2</Typography>
        <Grid container spacing={{ xs: 2, md: 2, lg: 2, xl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={2} sm={2} md={2} lg={2} xl={1} key={index}>
              <Item>fiche film</Item>
            </Grid>
          ))}
        </Grid>
        <Typography>Categorie 2</Typography>
        <Grid container spacing={{ xs: 2, md: 2, lg: 2, xl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={2} sm={2} md={2} lg={2} xl={1} key={index}>
              <Item>fiche film</Item>
            </Grid>
          ))}
        </Grid>
        <Typography>Categorie 2</Typography>
        <Grid container spacing={{ xs: 2, md: 2, lg: 2, xl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={2} sm={2} md={2} lg={2} xl={1} key={index}>
              <Item>fiche film</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Categories