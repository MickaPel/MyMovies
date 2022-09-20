import React from 'react';
import { useState, useEffect } from 'react';
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

import { AuthProvider } from './AuthContext';
import {auth} from './Components/Firebase/firebase'
import {onAuthStateChanged} from 'firebase/auth'

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div className="App">
      {/* <header className="App-header"> */}

          <BrowserRouter>
            <AuthProvider value={{currentUser}}>
          
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


              </AuthProvider>
            </BrowserRouter>




      {/* </header> */}
    </div>
  );
}

export default App;
