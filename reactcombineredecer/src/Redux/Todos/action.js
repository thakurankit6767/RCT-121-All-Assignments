
export const actionTypes = {
  GET_TODOS_REQUEST: "GET_TODO_REQUEST",
  GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
  GET_TODOS_FAILURE: "GET_TODOS_FAILURE",
  POST_TODOS_REQUEST: "POST_TODOS_REQUEST",
  POST_TODOS_SUCCESS: "POST_TODOS_SUCCESS",
  POST_TODOS_FAILURE: "POST_TODOS_FAILURE",
};

export const getTodoRequest = () => {
  return {
    type: actionTypes.GET_TODOS_REQUEST,
  };
};

export const getTodoSuccess = (data) => {
  return {
    type: actionTypes.GET_TODOS_SUCCESS,
    payload: data,
  };
};

export const getTodoFailure = () => {
  return {
    type: actionTypes.GET_TODOS_FAILURE,
  };
};
export const postTodoRequest = () => {
  return {
    type: actionTypes.POST_TODOS_REQUEST,
  };
};

export const postTodoSuccess = (data) => {
  return {
    type: actionTypes.POST_TODOS_SUCCESS,
    payload: data,
  };
};

export const postTodoFailure = () => {
  return {
    type: actionTypes.POST_TODOS_FAILURE,
  };
};





