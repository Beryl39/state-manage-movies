import React from 'react';
import MovieList from './MovieList'
import Nav from './Nav'
import AddMovie from './AddMovie';
import './App.css';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
