import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MovieCard(props) {

    const { data } = props;

    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/movie-page/${data.id}`)}>
            <CardMedia
                component="img"
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            />
        </Card>
    );
}