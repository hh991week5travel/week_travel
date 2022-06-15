//게시물 수정 페이지

import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Input from "../element/Input";
import Content from "../element/Content";
import Button from "../element/Button";
import "./PostAdd.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __updatePost } from "../redux/modules/post";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/firebase";
import { getCookie } from "../shared/Cookie";

const PostUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const boardId = params.postboardId;
  const titleRef = useRef();
  const contentRef = useRef();
  const register_imageRef = useRef();

  console.log(boardId);

  const reloadPost = (e) => {
    setTimeout(() => {
      dispatch(
        __updatePost({
          title: titleRef.current.value,
          content: contentRef.current.value,
          imgUrl: register_imageRef.current.url,
          token: getCookie("Authorization"),
          boardId: boardId,
        })
      );
      navigate(-1);
    }, 3000);
  };

  const [fileImage, setFileImage] = useState("");
  const imgRef = useRef(null);

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
        <Button onClick={reloadPost}>수정 완료!!</Button>
      </div>
    </>
  );
};

export default PostUpdate;
