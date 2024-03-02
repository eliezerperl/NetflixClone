import { ActionType, State } from '@/models/store';
import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from '../actions/Actions';

const fetchReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case GET_REQUEST:
      return { ...state, loading: true };
    case GET_FAIL:
      return { ...state, loading: false, error: action.payload };
    case GET_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    default:
      return { ...state };
  }
};

export default fetchReducer;
