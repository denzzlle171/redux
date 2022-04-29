import React, { useEffect } from 'react';
import {  fetchWeatherData } from './weather.actions';
import { connect } from 'react-redux'
import CityesItem from './CityesItem';
import {CityesSelector} from './weather.selectors';


const Weather = ({ getCityData, cityes, fetchWeather }) => {
  useEffect(() => {
    fetchWeather();
  }, []);

  console.log(cityes); 

  // if ((cityes = {})) {
  //   return null;
  // }
  
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cityes.map((city) => (
          <CityesItem key={city.id} city={city} />
        ))}
      </ul>
    </main>
  );
};

const mapDispatch = {

  fetchWeather: fetchWeatherData,
};

const mapState = state => {
  return {
    cityes: CityesSelector(state),
  };
}

export default connect(mapState, mapDispatch)(Weather);
