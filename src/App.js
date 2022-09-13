import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
import Categories from './Components/Categories/Categories';
import MoviePage from './Components/MoviePage/MoviePage';
import MoviesPageContent from './Components/MoviesPageContent/MoviesPageContent';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

          <BrowserRouter>
          
            <NavBar />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/movie-page" element={<MoviePage />} />
                <Route path="/movie-page-content" element={<MoviesPageContent />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>




    </BrowserRouter>




      {/* </header> */}
    </div>
  );
}

export default App;
