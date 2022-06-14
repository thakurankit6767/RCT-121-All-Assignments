import { todoact } from "./action";
const init = {
  loading: false,
  todo: [],
  error: false,
};
export const TodoReducer = (state = init, action) => {
  switch (action.type) {
    case todoact.GET_TODO_REQUSET: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case todoact.GET_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todo: action.payload,
      };
    }
    case todoact.GET_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
