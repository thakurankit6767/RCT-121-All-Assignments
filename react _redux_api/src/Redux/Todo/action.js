import axios from "axios";

export const actionTypes = {
  GET_SUCCESS: "GET_SUCCESS",
  GET_FAILURE: "GET_FAILURE",
  GET_REQUEST: "GET_REQUEST",
  POST_SUCCESS: "POST_SUCCESS",
  POST_FAILURE: "POST_FAILURE",
  POST_REQUEST: "POST_REQUEST",
  UPDATE_REQUEST: "UPDATE_REQUEST",
  UPDATE_SUCCESS: "UPDATE_SUCCESS",
  UPDATE_FAILURE: "UPDATE_FAILURE",
};

export const getRequest = (data) => {
  return {
    type: actionTypes.GET_REQUEST,
    payload: data,
  };
};
export const getSuccess = (data) => {
  return {
    type: actionTypes.GET_SUCCESS,
    payload: data,
  };
};
export const getFailure = (data) => {
  return {
    type: actionTypes.GET_FAILURE,
    payload: data,
  };
};
export const postRequest = (data) => {
  return {
    type: actionTypes.GET_REQUEST,
    payload: data,
  };
};
export const postSuccess = (data) => {
  return {
    type: actionTypes.POST_SUCCESS,
    payload: data,
  };
};
export const postFailure = (data) => {
  return {
    type: actionTypes.POST_FAILURE,
    payload: data,
  };
};

export const updateSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_SUCCESS,
    payload: data,
  };
};
export const fetchTodos = async (dispatch) => {
  const requestTodosAction = getRequest();
  dispatch(requestTodosAction);
  try {
    const res = await axios.get("http://localhost:8080/todos");
    const successTodosAction = getSuccess(res.data);
    dispatch(successTodosAction);
  } catch (error) {
    const failureTodosAction = getFailure();
    dispatch(failureTodosAction);
  }
};
export const updateTodos = async ({ dispatch, id, completed }) => {
  try {
    const res = await axios.patch(`http://localhost:8080/todos/${id}`, {
      completed: !completed,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTodos = async ({ dispatch, text }) => {
  try {
    const res = await axios.post("http://localhost:8080/todos", {
      title: text,
      completed: false,
    });
    fetchTodos(dispatch);
  } catch (error) {
    console(error);
  }
};
export const removeTodo = async ({ dispatch, id }) => {
  try {
    const res = await axios.delete(`http://localhost:8080/todos/${id}`);
    fetchTodos(dispatch);
  } catch (error) {
    console.log(error);
  }
};
