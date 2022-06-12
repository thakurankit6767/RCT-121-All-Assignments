import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Todo } from "../Components/Todo";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
