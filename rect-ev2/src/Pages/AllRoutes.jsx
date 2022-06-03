import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import RegisterPageOne from "./RegisterPageOne";
import RegisterPageTwo from "./RegisterPageTwo";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterPageOne />} />
        <Route path="/registerpagetwo" element={<RegisterPageTwo />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute to="/">
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
