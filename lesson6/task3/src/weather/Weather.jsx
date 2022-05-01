import React, { useEffect } from 'react';
import { getWeatherData } from './weather.actions';
import { connect } from 'react-redux'
import CityesItem from './CityesItem';
import {CityesSelector} from './weather.selectors';


const Weather = ({ cityes, WeatherData }) => {
  useEffect(() => {
    WeatherData();
  }, []);

  console.log(cityes);//!!!



  if (cityes === undefined) {
    return null;
  }

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
 WeatherData: getWeatherData,
};

const mapState = state => {
  return {
    cityes: CityesSelector(state),
  };
}

export default connect(mapState, mapDispatch)(Weather);
