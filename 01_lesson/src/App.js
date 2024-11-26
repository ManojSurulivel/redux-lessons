import React from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';

function App() {
  return (
      <div className="App">
        <h1>Weather Dashboard</h1>
        <SearchBar />
        <WeatherDisplay />
      </div>
  );
}

export default App;
