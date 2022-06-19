import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersgithub } from "../Redux/Github/action";
import { Navigate } from "react-router-dom";
export const Home = () => {
  const [pg, setPg] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isload = useSelector((state) => state.user.isload);
  const [srch, setSrch] = useState("");
  const isAuth = useSelector((state) => state.auth.isAuth);
  function searchUserName() {
    dispatch(fetchUsersgithub(pg, srch));
  }

  useEffect(() => {
    dispatch(fetchUsersgithub(pg, srch));
  }, [pg]);
  if (!isAuth) {
    alert("Please login");
    return <Navigate to="/signin"></Navigate>;
  }
  return (
    <div>
      <h1> SearchGitHub Users</h1>
      <input
        type="text"
        placeholder="srch"
        onChange={(elem) => setSrch(elem.target.value)}
      />
      <input type="submit" onClick={searchUserName} />

      {isload ? (
        <h1>Loading</h1>
      ) : (
        user?.map((elemen) => (
          <div key={elemen.id}>
            <h2>{elemen.login}</h2>
          </div>
        ))
      )}
      <div>
        <button onClick={() => (pg == 0 ? setPg(0) : setPg(pg - 1))}>
          Previous
        </button>
        <button onClick={() => setPg(pg + 1)}>Next</button>
      </div>
    </div>
  );
};
