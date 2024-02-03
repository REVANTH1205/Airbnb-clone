// App.js
import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
            <BrowserRouter>

< Header/>
    <Routes>
         <Route
            exact
            path="/search"
            element={<SearchPage />}
        />
        <Route
            exact
            path="/"
            element={<Home />}
        />
        
    </Routes>
    
< Footer />
</BrowserRouter>
    </div>
  );
}

export default App;
