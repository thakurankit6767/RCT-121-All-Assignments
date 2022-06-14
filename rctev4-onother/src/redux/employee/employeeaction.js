import axios from "axios";

export const employeeaction = {
  emprequest: "emprequest",
  empsuccess: "empsuccess",
  empfailure: "empfailure",
};

export const handrequest = () => {
  return {
    type: employeeaction.emprequest,
  };
};

export const handlesucces = (data) => {
  return {
    type: employeeaction.empsuccess,
    payload: data,
  };
};

export const handlefailure = () => {
  return {
    type: employeeaction.empfailure,
  };
};

export const getemplyeedata = (dispatch, page) => {
  const requestapi = handrequest();

  dispatch(requestapi);

  return axios({
    method: "GET",
    url: "http://localhost:8080/employee",
    params: {
      _page: page,
      _limit: 6,
    },
  })
    .then((result) => {
      const successapi = handlesucces(result.data);

      dispatch(successapi);
    })
    .catch((e) => {
      const failureapi = handlefailure();

      dispatch(failureapi);
    });
};
