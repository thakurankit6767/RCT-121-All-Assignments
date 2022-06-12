

import axios from "axios";

export const todoActions = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",
  ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE: "ADD_TODO_FAILURE",
};



export const getTodoRequest = () => ({
  type: todoActions.GET_TODO_REQUEST,
});

export const getTodoSuccess = (data) => ({
  type: todoActions.GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoFailure = () => ({
  type: todoActions.GET_TODO_FAILURE,
});

export const addTodoRequest = () => ({
  type: todoActions.ADD_TODO_REQUEST,
});

export const addTodoSuccess = (data) => ({
  type: todoActions.ADD_TODO_SUCCESS,
  payload: data,
});

export const addTodoFailure = () => ({
  type: todoActions.ADD_TODO_FAILURE,
});

export const getTodo = (dispatch) => {
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction);
  axios({
    url: "http://localhost:8081/todos",
    method: "GET",
  })
    .then((res) => {
      const todoSuccessAction = getTodoSuccess(res.data);
      dispatch(todoSuccessAction);
    })
    .catch((error) => {
      const todoFailureAction = getTodoFailure();
      dispatch(todoFailureAction);
    });
};

export const addTodo = ({ title, dispatch }) => {
  const todoRequestAction = addTodoRequest();
  dispatch(todoRequestAction);
  axios({
    url: "http://localhost:8081/todos",
    method: "POST",
    data: {
      title,
      status: false,
    },
  })
    .then((res) => {
      const todoSuccessAction = addTodoSuccess();
      dispatch(todoSuccessAction);
    })
    .catch((error) => {
      const todoFailureAction = addTodoFailure();
      dispatch(todoFailureAction);
    });
};