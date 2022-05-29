import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initState = {
  loading: true,
  error: false,
  data: null,
};
const githubActions = {
  fetch: "fetch",
  success: "success",
  failure: "failure",
};
const githubReducer = (state, action) => {
  switch (action.type) {
    case githubActions.fetch: {
      return {
        ...state,
        loading: true,
        error: false,
        data: null,
      };
    }

    case githubActions.success: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }

    case githubActions.failure: {
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
const GitHub = () => {
  const [{ loading, error, data }, dispatch] = useReducer(
    githubReducer,
    initState
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch({
      type: githubActions.fetch,
    });
    axios({
      url: "https://api.github.com/users",
      method: "GET",
      params: {
        q: "masai",
      },
    })
      .then((res) => {
        dispatch({
          type: githubActions.success,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: githubActions.failure,
        });
      });
  };
  console.log("data", data);

  return (
    <div>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      <h2>Github</h2>
      {data?.map((item) => (
        <div key={item.id}>{item.login}</div>
      ))}
    </div>
  );
};

export default GitHub;
