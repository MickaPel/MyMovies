import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <Router>

            <NavBar />
          
              <Route exact path="/" element={Home} />
              <Route path="/space-travel" element={Profile} />

          </Router> */}

          <BrowserRouter>
          
            <NavBar />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />\
            </Routes>




    </BrowserRouter>




      {/* </header> */}
    </div>
  );
}

export default App;
