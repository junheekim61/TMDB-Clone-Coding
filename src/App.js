import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Celebrity from './pages/Celebrity';
import More from './pages/More';
import TV from './pages/TV';
import Movie from './pages/Movie';


export default function App() {
  return (
    <>
      <Reset />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/more" element={<More />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
