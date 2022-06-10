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
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/PostDetail" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
