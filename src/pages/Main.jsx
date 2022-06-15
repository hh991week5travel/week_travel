import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __loadPosts } from "../redux/modules/post";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__loadPosts());
  }, [dispatch]);

  //{posts} 객체의비구조화 destructing
  const { posts } = useSelector((state) => state.postReducer);

  return (
    <>
      <Header />
      <HomeBody>
        <WriteButton
          onClick={() => {
            navigate("/Post/Add");
          }}
        >
          <LogoImg src="/add_button.png" />
        </WriteButton>

        <PostBox>
          {posts?.map((post) => (
            <Posts
              key={post.boardId}
              onClick={() => {
                navigate(`/Post/Detail/${post.boardId}`);
              }}
            >
              <ImgBox src={post.image} />
              <TextBox>
                <p style={{ marginLeft: "10px", fontWeight: "600" }}>
                  {post.title}
                </p>
              </TextBox>
              <TextBox>
                <p style={{ marginLeft: "10px", fontSize: "13px" }}>
                  {post.nickname}
                </p>
              </TextBox>
            </Posts>
          ))}
        </PostBox>
      </HomeBody>
    </>
  );
};

const HomeBody = styled.div`
  height: 100vh;
  background: url(../../background.jpg) center center no-repeat;
  background-size: cover;
`;
const LogoImg = styled.img`
  width: 100%;
`;
const WriteButton = styled.button`
  background: white;
  border: 3px solid #b2e1f4;
  width: 130px;
  height: 130px;
  border-radius: 130px;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: translate(10px, -15px);
  }
  position: absolute;
  bottom: 5%;
  right: 5%;
`;

const PostBox = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 3em;
  margin: 100px auto;
  @media screen and (max-width: 1000px) {
    width: 100%;
    grid-template-columns: repeat(2, 2fr);
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: repeat(1, 3fr);
  }
`;
const Posts = styled.div`
  width: 300px;
  height: 300px;
  background: white;
  margin: auto;
  border-radius: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translate(5px, -20px);
  }
`;

const ImgBox = styled.img`
  width: 300px;
  height: 200px;
  margin: 0 auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const TextBox = styled.div`
  display: flex;
  width: fit-content;
  height: 35px;
  margin: 10px;
`;

export default Main;
