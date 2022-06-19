import * as types from "./actionTypes";
import axios from "axios";
export const RegisterRequest = () => {
  return {
    type: types.REGISTER_REQUEST,
  };
};
export const RegisterSuccess = (payload) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
};
export const RegisterFailure = (payload) => {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
};
export const RegisterAuthenticateUser = (data) => (dispatch) => {
  console.log(data);
  dispatch(RegisterRequest);
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", data)
    .then((res) => {
      dispatch(RegisterSuccess(res.data));
      console.log(res);
    })
    .catch((err) => {
      dispatch(RegisterFailure(err.data));
      console.log(err);
    });
};
