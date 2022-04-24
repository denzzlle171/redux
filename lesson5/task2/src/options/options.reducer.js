import { TOGGLE_OPTION } from './options.actions'

const options = [
  {
    id: 'id-0',
    name: '19-inch wheels',
  },
  {
    id: 'id-1',
    name: 'Leather-trimmed Sport Seats',
  },
  {
    id: 'id-2',
    name: 'B&O Sound System',
  },
  {
    id: 'id-3',
    name: 'Adaptive Cruise Control',
  },
  {
    id: 'id-4',
    name: 'Daytime running lights',
  },
  {
    id: 'id-5',
    name: 'Auto High-Beam Headlamps',
  },
  {
    id: 'id-6',
    name: 'Carbon Sport Interior',
  },
];

const initialState = {
  optionsList: options,
  selected: [],
};
const optionsReducer = (state = initialState, action) => {

 
  switch (action.type) {
    case TOGGLE_OPTION: {
      const newSelectedIds = state.selected.includes(action.payload.optionId)
        ? state.selected.filter((id) => id !== action.payload.optionId)
        : state.selected.concat(action.payload.optionId);
      
      return {
        ...state,
        selected: newSelectedIds,
      };
    }
    default:
      return state;
  }
};

export default optionsReducer;
