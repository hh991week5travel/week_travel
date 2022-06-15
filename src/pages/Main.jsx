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
            navigate("/PostAdd");
          }}
        >
          <LogoImg src="/add_button.png" />
        </WriteButton>

        {/* <PostBox>
          {post_list?.map((cur, idx) => (
            <Posts
              key={idx}
              onClick={() => {
                history.push(`/detail/${cur.postId}`);
              }}
            >
              <ImgBox src={cur.imageUrl} />
              <TextBox>
                <GoMegaphone />
                <p style={{ marginLeft: "10px", fontWeight: "600" }}>
                  {cur.title}
                </p>
              </TextBox>
              <TextBox>
                <GoMilestone />
                <p style={{ marginLeft: "10px", fontSize: "13px" }}>
                  {cur.location}
                </p>
              </TextBox>
            </Posts>
          ))}
        </PostBox> */}
        <div className="postView">
         {posts.map( post => {
              return <div key={post.boardId}>
                <div>{post.title}</div>
                <div>{post.nickName}</div>
                <img src = {post.imgUrl} alt=''></img> 
                </div>
            })}
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
  right:5%;
`;

export default Main;
