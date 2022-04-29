import React from 'react';

const CityesItem = ({city}) => {
  return (
    <li className="city">
      <span className="city__name">{city.name}</span>
      <span className="city__temperature">{city.temperature}</span>
    </li>
  );
};

export default CityesItem;
