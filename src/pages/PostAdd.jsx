//게시물 작성 페이지

import React, { useRef, useState } from "react";
import styled from "styled-components";
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
    setTimeout(() => {
      dispatch(
        __addPost({
          title: titleRef.current.value,
          content: contentRef.current.value,
          imgUrl: register_imageRef.current.url,
        })
      );
      navigate("/Main");
    });
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

  //미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    console.log(reader);

    return new Promise((resolve) => {
      reader.onload = () => {
        setFileImage(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <Container>
        <FlexBox>
          <ImgBox>
            <UploadFileInput
              type="file"
              placeholder="PICTURE"
              id="file"
              accept={"image/*"}
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
                uploadFB(e);
              }}
            />
            <PreviewBox>
              {fileImage && <PreviewImg src={fileImage} alt="preview-img" />}
            </PreviewBox>
          </ImgBox>
          <DataBox>
            <TitleInput
              ref={titleRef}
              type="text"
              placeholder="제목을 입력해주세요"
            />
            <ContentInput ref={contentRef} placeholder="내용을 입력해주세요" />
            <Button onClick={addPost}>작성 완료</Button>
          </DataBox>
        </FlexBox>
      </Container>
    </>
  );
};

const PreviewBox = styled.div`
  width: 430px;
  height: 300px;
`;

const PreviewImg = styled.img`
  width: 86.5%;
  height: 250px;
  border-radius: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const UploadFileInput = styled.input`
  border: 3px solid #b2e1f4;
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  margin: 20px 0px;
`;

const Container = styled.div`
  width: fit-content;
  height: 520px;
  border-radius: 10px;
  margin: 170px auto;
  display: flex;
  justify-content:center;
  align-items:center;
  background: rgb(222, 196, 228);
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const FlexBox = styled.div`
  display: flex;
  width: fit-content;
  margin: 25px 15px;
  background: white;
  border-radius: 10px;
  padding: 0px ;
  height: 470px;
`;

const ImgBox = styled.div`
  width: 430px;
  height: 450px;
  margin: 25px 5px;
  & > h2 {
    font-family: "Gugi";
  }
`;

const DataBox = styled.div`
  width: 300px;
  height: 450px;
  margin: 25px 5px;
`;

const TitleInput = styled.input`
  background: rgb(248, 218, 243);
  width: 280px;
  border: none;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  margin-bottom: 25px;
`;

const ContentInput = styled.input`
  background: rgb(248, 218, 243);
  width: 280px;
  height: 180px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  margin-bottom: 25px;
`;

const Button = styled.button`
  background: rgb(248, 218, 243);
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  margin: 5px auto;
`;

export default Post;
