import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selector';
import Options from './Options';
import {toggleOption} from './options.actions';

const mapState = (state) => {
  return {
    options: selectedOptionsSelector(state),
  };
};


const mapDispatch = {
  moveOption: toggleOption
};

export default connect(mapState, mapDispatch)(Options);
