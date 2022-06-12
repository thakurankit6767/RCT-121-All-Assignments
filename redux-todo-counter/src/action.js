import axios from "axios";

export const todosActions = {
    GET_TODO_REQUEST: "GET_TODO_REQUEST",
    GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
    GET_TODO_FAILURE: "GET_TODO_FAILURE",
    ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
    ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
    ADD_TODO_FAILURE: "ADD_TODO_FAILURE"
}

export const getTodoRequest = () => ({
    type: todosActions.GET_TODO_REQUEST
});
  
export const getTodoSuccess = (data) => ({
    type: todosActions.GET_TODO_SUCCESS,
    payload: data
});

export const getTodoFailure = () => ({
    type: todosActions.GET_TODO_FAILURE
});

export const getTodos = ({page,dispatch}) => {
    const todoRequestAction = getTodoRequest();
    dispatch(todoRequestAction);
    return axios({
      url: `http://localhost:3000/todos?_page=${page}&_limit=5`,
      method: "GET"
    })
      .then((res) => {
        const todoSuccessAction = getTodoSuccess(res.data);
        dispatch(todoSuccessAction);
      })
      .catch((err) => {
        const todoErrorAction = getTodoFailure();
        dispatch(todoErrorAction);
      });
  };

  export const addTodoRequest = () => ({
    type: todosActions.ADD_TODO_REQUEST
  });
  
  export const addTodoSuccess = (data) => ({
    type: todosActions.ADD_TODO_SUCCESS,
    payload: data
  });
  
  export const addTodoFailure = () => ({
    type: todosActions.ADD_TODO_FAILURE
  });
  
  export const addTodos = ({ title, dispatch }) => {
    const todoRequestAction = addTodoRequest();
    dispatch(todoRequestAction);
    return axios({
      url: "http://localhost:3000/todos",
      method: "POST",
      data: {
        title,
        status: false
      }
    })
      .then((res) => {
        const todoSuccessAction = addTodoSuccess();
        dispatch(todoSuccessAction);
      })
      .catch((err) => {
        const todoErrorAction = addTodoFailure();
        dispatch(todoErrorAction);
      });
  };