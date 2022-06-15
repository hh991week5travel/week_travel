//게시물 작성 페이지

import React, { useRef } from "react";
import Header from "../components/Header";
import Image from "../components/ImageUpload";
import Input from "../element/Input";
import Content from "../element/Content";
import Button from "../element/Button";
import "./PostAdd.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/post";
import { getCookie } from "../shared/Cookie";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const addPost = (e) => {
    dispatch(
      __addPost({
        title: titleRef.current.value,
        content: contentRef.current.value,
        // imgUrl : imgUrl.current.value,
        token: getCookie("Authorization"),
      })
    );
    navigate("/Main");
  };

  return (
    <>
      <Header />
      <HomeBody>
        <div className="container">
          <Image />
          <span>제목</span>
          <Input ref={titleRef} />
          <span>내용</span>
          <Content ref={contentRef} />
        </div>

        <div className="footer">
          <Button onClick={addPost}>작성 완료</Button>
        </div>
      </HomeBody>
    </>
  );
};

const HomeBody = styled.div`
  height: 100vh;
  background: url(../../background.jpg) center center no-repeat;
  background-size: cover;
`;

export default Post;
