import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children, to }) {
  const [state] = useContext(AuthContext);

  if (state.isAuth) {
    return children;
  }

  return <Navigate to={to || "/login"} />;
}

export default PrivateRoute;

// 1. create a auth context, and provide it to your app
// 2. pass down auth, and setAuth dispatcher
// 3. create a component private auth
// 4. if auth, then show children
// 5. else navigate user to another page
// 6. wrap private auth around required elements
// 7. create a login page, where user can login

// 1. useReducer => isAuth, token
// 2. api call => login
// 3. on success => dispatched success, set token

// 4. retreived a redirectTo from the URL
// 5. moved the user from login to the redirect URL
// 6. if it does not exists, then by default they move to /users

// 7. we also added another logic to /users
// 8. useSearchParams
// 9. retreived current page number from url
// 10, we added a prev and next button
// 11. we were able to update the url
// 12. using setSearchParams({page})
