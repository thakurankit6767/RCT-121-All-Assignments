import { companyaction } from "./companyaction";

const initState = {
  loading: false,
  error: false,
  data: [],
};

export const companyreducer = (store = initState, action) => {
  switch (action.type) {
    case companyaction.companyrequest: {
      return {
        ...store,
        loading: true,
      };
    }
    case companyaction.companysuccess: {
      return {
        ...store,
        loading: false,
        data: action.payload,
      };
    }
    case companyaction.companyfailure: {
      return {
        ...store,
        loading: false,
        error: true,
      };
    }

    default:
      return store;
  }
};
