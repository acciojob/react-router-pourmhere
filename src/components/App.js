
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";


const App = () => {
  return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">AboutUs</Link>
              </li>
            </ul>
          </nav>

           <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        </div>
        </Router>
    
  )
}

export default App
