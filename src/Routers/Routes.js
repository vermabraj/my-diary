import React from 'react'
import { Route, Routes } from "react-router-dom";
import AddTodo from '../Pages/AddTodo';
import Diary from '../Pages/Diary';
import GalleryPhotos from '../Pages/Gallery';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import TodoItem from '../Pages/TodoItem';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/note" element={<Diary />}></Route>
        <Route path="/gallery" element={<GalleryPhotos />}></Route>
        <Route path="/diary" element={<TodoItem />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
