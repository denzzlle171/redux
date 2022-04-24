import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ title, options, moveOption }) => {

  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map((option) => (
          <li key={option.id}>
            <button
              className="options__list-item"
              onClick={() => moveOption(option.id)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Options.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  moveOption: PropTypes.func.isRequired,
};


export default Options;