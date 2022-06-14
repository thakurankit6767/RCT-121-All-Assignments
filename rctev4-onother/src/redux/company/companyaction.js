import axios from "axios";

export const companyaction = {
  companyrequest: "companyrequest",
  companysuccess: "companysuccess",
  companyfailure: "companyfailure",
};

export const companyrequest = () => {
  return {
    type: companyaction.companyrequest,
  };
};

export const companysuccess = (data) => {
  return {
    type: companyaction.companysuccess,
    payload: data,
  };
};
export const companyfailure = () => {
  return {
    type: companyaction.companyfailure,
  };
};

export const companydata = () => (dispatch) => {
  const requestapi = companyrequest();

  dispatch(requestapi);

  return axios({
    method: "GET",
    url: "http://localhost:8080/company",
  })
    .then((res) => {
      const successapi = companysuccess(res.data);
      dispatch(successapi);
    })
    .catch((e) => {
      const failureapi = companyfailure();
      dispatch(failureapi);
    });
};
