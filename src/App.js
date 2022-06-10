import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/post" element={<Post />} />
          <Route path="/postDetail/:postId" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
