import React from "react";
import { Routes, Route } from "react-router";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import TodosList from "./pages/TodosList";
import NotFound from "./pages/NotFound";
const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/todo" element={<TodosList />} />
      <Route path="todo/:id" element={<Todo />} />
      <Route path="todo/edit" element={<Edit />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default AllRouter;
