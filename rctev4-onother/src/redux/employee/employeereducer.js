import { employeeaction } from "./employeeaction";

const initState = {
  loading: false,
  error: false,
  employeedata: [],
};

export const employeereducer = (store = initState, action) => {
  switch (action.type) {
    case employeeaction.emprequest: {
      return {
        ...store,
        loading: true,
      };
    }
    case employeeaction.empsuccess: {
      return {
        ...store,
        loading: false,
        employeedata: action.payload,
      };
    }
    case employeeaction.empfailure: {
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
