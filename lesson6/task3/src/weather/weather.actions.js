export const GET_WETHER_DATA = 'GET_WETHER_DATA';
import { getWeather } from './weather.gateway';



export const getData = (dataCityes) => {
  return {
    type: GET_WETHER_DATA,
    payload: dataCityes
  };
};


export const getWeatherData = () => {
  return async function (dispatch) {
  const response = await getWeather();
   dispatch(getData(response));
  };
};

  // return function (dispatch) {
  //   getWeather().then((cityData) => {
  //     dispatch(getData(cityData));
  //   });
  // };