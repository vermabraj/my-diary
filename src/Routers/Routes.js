import React from 'react'
import { Route, Routes } from "react-router-dom";
import AddTodo from '../Pages/AddTodo';
import Diary from '../Pages/Diary';
import GalleryPhotos from '../Pages/Gallery';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import TodoItem from '../Pages/TodoItem';
import  PrivateRoute from "../Context/PrivateRoute"
import Celebration from '../Pages/celebration';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/note"
          element={
            <PrivateRoute>
              <Diary />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/gallery"
          element={
            <PrivateRoute>
              <GalleryPhotos />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/diary"
          element={
            <PrivateRoute>
              <TodoItem />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/celebrations" element={<Celebration />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
