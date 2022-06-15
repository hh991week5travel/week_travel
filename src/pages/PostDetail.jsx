//게시물 상세 페이지

import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost, __loadDetail } from "../redux/modules/post";
import { getCookie } from "../shared/Cookie";
import styled from "styled-components";

const PostDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  console.log(params.postboardId);

  useEffect(() => {
    dispatch(
      __loadDetail({
        token: getCookie("Authorization"),
        boardId: params.postboardId,
      })
    );
  }, [dispatch]);

  const user = useSelector((user) => user);
  const detail = useSelector((state) => state.postReducer?.detail?.postIdCheck);

  console.log(detail);

  const loginUser = getCookie("nickname");
  console.log(loginUser);

  const removePost = () => {
    dispatch(
      __deletePost({
        token: getCookie("Authorization"),
        boardId: params.postboardId,
      })
    );
    navigate("/Main");
  };
  console.log(detail?.User?.nickname);

  return (
    <>
      <Container>
        <FlexBox>
          <ImgBox>
            <img src={detail?.image} alt="" style={{ width: "430px" }} />
          </ImgBox>
          <DataBox>
            <Title>{detail?.title}</Title>
            <Content>{detail?.content}</Content>
            {loginUser === detail?.User?.nickname && (
              <>
                <Link to={`/Post/Update/${detail.boardId}`}>
                  <Button>수정</Button>
                </Link>
                <Button onClick={removePost}>삭제</Button>
              </>
            )}
          </DataBox>
        </FlexBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: fit-content;
  height: 520px;
  border-radius: 10px;
  margin: 150px auto;
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

const Title = styled.div`
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

const Content = styled.div`
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

export default PostDetail;
