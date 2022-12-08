import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../Components/apis/movieApi';
// import moviePosterApi from '../../Components/apis/moviPosterApi';
import { APIkey } from '../../Components/apis/movieApiKeys';

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
        async () => {
            // const movieText = 'batman';
            const response = await movieApi.get(
                `/3/trending/movie/week?api_key=${APIkey}`
                );
        return response.data;
    
});

// export const fetchAsyncSeries = createAsyncThunk(
//     'movies/fetchAsyncShows',
//         async () => {
//             const movieText = 'Rick';
//             const response = await movieApi.get(
//                 `?apiKey=${APIkey}&s=${movieText}&type=series`
//                 );
//         return response.data;
    
// });

// export const fetchAsyncMovieOrSeriePage = createAsyncThunk(
//     'movies/fetchAsyncMoviesOrSeriePage',
//         async (id) => {
//             const response = await movieApi.get(
//                 `/3/movie/${id}?api_key=${APIkey}&language=en-US`,
//                 `/3/movie/${id}/credits?api_key=${APIkey}&language=en-US`
//                 );
//         return response.data;
    
// });
// export const fetchAsyncMovieOrSeriePageCredits = createAsyncThunk(
//     'movies/fetchAsyncMovieOrSeriePageCredits',
//         async (id) => {
//             const response = await movieApi.get(
//                 `/3/movie/${id}/credits?api_key=${APIkey}&language=en-US`
//                 );
//         return response.data;
    
// });

const initialState = {
    movies:{},
    series:{},
    movieOrSeriePage:{},
    credits:{},
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        // removeSelectedMovieOrShow: (state) => {
        //     state.movieOrSeriePage = {};
        // }
    },
    extraReducers: {
    [fetchAsyncMovies.pending]: () => {
        console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
        console.log("fullfilled");
        return {...state, movies: payload};
    },
    [fetchAsyncMovies.rejected]: () => {
        console.log("rejected");
    },
    // [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
    //     console.log("fullfilled");
    //     return {...state, series: payload};
    // },
    // [fetchAsyncMovieOrSeriePage.fulfilled]: (state, {payload}) => {
    //     console.log("fullfilled");
    //     return {...state, movieOrSeriePage: payload};
    // },
    // [fetchAsyncMovieOrSeriePageCredits.fulfilled]: (state, {payload}) => {
    //     console.log("fullfilled");
    //     return {...state, credits: payload};
    // },
    }
})

// Action creators are generated for each case reducer function
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getMovieOrSeriePage = (state) => state.movies.movieOrSeriePage;
export const getMovieOrSeriePageCredits = (state) => state.movies.credits;

export default movieSlice.reducer;