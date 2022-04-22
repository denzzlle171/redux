import { NEXTPAGE, PREVPAGE } from './page.actions';

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case NEXTPAGE:
      return state + 1;
    case PREVPAGE:
      return state - 1;
    default:
      return state;
  }
};
export default pageReducer;


