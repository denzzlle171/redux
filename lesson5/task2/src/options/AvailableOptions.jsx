import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selector';
import Options from './Options';
import {toggleOption} from './options.actions';

const mapState = (state) => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
