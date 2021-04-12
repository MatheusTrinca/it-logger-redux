import { GET_LOGS, LOGS_ERROR, SET_LOADING, ADD_LOG } from '../actions/types';

const initialState = {
  logs: null,
  loading: false,
  error: null,
  current: null,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG: {
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default logReducer;