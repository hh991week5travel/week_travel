import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import PostUpdate from "./pages/PostUpdate"
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/PostDetail" element={<PostDetail />} />
          <Route path="/PostUpdate" element={<PostUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
