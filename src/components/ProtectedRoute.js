import { Route, Redirect } from "react-router-dom";

function ProtectedRoute ({Component, ...props }) {
  return (
    <Route>
      {props.loggedIn ? <Component {...props} /> : <Redirect to="./login" />}
    </Route>
  );
};

export default ProtectedRoute;