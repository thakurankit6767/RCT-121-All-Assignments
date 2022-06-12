import { todoActions } from "./action";

export const initState = {
  loading: false,
  todo: [],
  error: false,
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case todoActions.GET_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case todoActions.GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.payload,
        error: false,
      };
    case todoActions.GET_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case todoActions.ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case todoActions.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case todoActions.ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};