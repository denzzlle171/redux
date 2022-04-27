import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as usersActions from './users.actions';


class SearchField extends Component {
  state = {
    userName: '',
  };

  onChange = (event) => {
    this.setState({ userName: event.target.value });
  };

    handleUserSearch = () => {
        
        this.props.fetchUserData(this.state.userName);
        
  }

  render() {
    return (
      <div className="name-form">
        <input
          onChange={this.onChange}
          type="text"
          value={this.state.userName}
          className="name-form__input"
        />
        <button onClick={this.handleUserSearch} className="name-form__btn btn">
          Show
        </button>
      </div>
    );
  }
};


const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};

SearchField.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(SearchField);
