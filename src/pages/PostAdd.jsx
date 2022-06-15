//게시물 작성 페이지

import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../element/Input";
import Content from "../element/Content";
import Button from "../element/Button";
import "./PostAdd.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/post";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/firebase";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const register_imageRef = useRef();

  const addPost = (e) => {
    dispatch(
      __addPost({
        title: titleRef.current.value,
        content: contentRef.current.value,
        imgUrl: register_imageRef.current.url,
      })
    );
    navigate("/Main");
  };

  const [fileImage, setFileImage] = useState("");

  const uploadFB = async (e) => {
    const upload_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    const file_url = await getDownloadURL(upload_file.ref);
    register_imageRef.current = { url: file_url };
    console.log(register_imageRef.current.url);
  };

  return (
    <>
      <div className="container" style={{ margin: "150px auto" }}>
        {fileImage && (
          <img
            alt="sample"
            src={fileImage}
            style={{ margin: "auto", maxWidth: "300px", maxHeight: "300px" }}
          />
        )}
        <div style={{ alignItems: "center", justifyContent: "center" }} />
        <input
          type="file"
          placeholder="PICTURE"
          onChange={uploadFB}
          id="file"
          required
        />

        <span>제목</span>
        <Input ref={titleRef} />
        <span>내용</span>
        <Content ref={contentRef} />
      </div>

      <div className="footer">
        <Button onClick={addPost}>작성 완료</Button>
      </div>
    </>
  );
};

export default Post;
