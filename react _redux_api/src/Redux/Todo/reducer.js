import { actionTypes } from "./action";
export const initialState = {
  isLoading: false,
  isError: false,
  todos: [],
};
export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_REQUEST: {
      return {
        isLoading: true,
        isError: false,
      };
    }
    case actionTypes.GET_SUCCESS: {
      return {
        isLoading: false,
        isError: false,
        todos: payload,
      };
    }
    case actionTypes.GET_FAILURE: {
      return {
        isLoading: false,
        isError: true,
      };
    }
    case actionTypes.POST_REQUEST: {
      return {
        isLoading: true,
        isError: false,
      };
    }
    case actionTypes.POST_SUCCESS: {
      return {
        isLoading: false,
        isError: false,
        todos: [...state.todos, payload],
      };
    }
    case actionTypes.POST_FAILURE: {
      return {
        isLoading: false,
        isError: true,
      };
    }
    case actionTypes.UPDATE_SUCCESS:{
      return{
        isLoading:false,
        isError:false,
        todos:payload
      }
    }
    default:
      return state;
  }
};


