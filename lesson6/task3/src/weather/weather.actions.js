export const GET_WETHER_DATA = 'GET_WETHER_DATA';
import { getWeather } from './weather.gateway';



export const getWeatherData = (dataCityes) => {
  return {
    type: GET_WETHER_DATA,
    payload: dataCityes
  };
};


export const fetchWeatherData = () => {
  return function(dispatch) {
    getWeather().then((cityData) => {
      dispatch(getWeatherData(cityData));
    })
  }
};




