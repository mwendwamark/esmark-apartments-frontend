import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
  );
}
export default AppRoutes;
