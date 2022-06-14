import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { __loadPosts } from "../redux/modules/post";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__loadPosts())
  // }, [dispatch]);

  //{posts} 객체의비구조화 destructing
  const { posts } = useSelector((state) => state.postReducer)
  console.log(posts)


  return (
    <>
      <Header />
      <HomeBody>

        <WriteButton
          onClick={() => {
            navigate('/PostAdd')
          }}
        >
          <LogoImg src="/logo_1.png" />
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
      </HomeBody>
    </>
  );
};

const HomeBody = styled.div`
  width: 1000px;
  margin: 90px auto;
   
`;
const LogoImg = styled.img`
width: 130px;
height: 130px;
border-radius: 130px;
border: 3px solid #b2e1f4;
background: white;
`;
const WriteButton = styled.button`
  background: none;
  border: none;
  cursor:pointer;
  transition: transform 300ms ease-in-out;
  
    &:hover{
        transform:translate(10px,-15px);
    }
  `;

export default Main;