import React from "react";
import styled from "styled-components";

import { deleteCookie } from "../shared/Cookie";

import Buttons from "../elements/Buttons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user.user)

  return (
    <>
      <HeaderContainer>
        <Link to="/Main">
          <img
            src="logo_1.png"
            back_size="100% 100%"
            height="100px"
            alt="logo"
          />
        </Link>
        <ButtonContainer>
          <Buttons
            text-size="16px"
            width="120px"
            bg="#96663F"
            _onClick={() => {
              dispatch(userActions.logOut());
              navigate("/");
              deleteCookie("token");
            }}
          >
            <span size="20px">로그아웃</span>
          </Buttons>
        </ButtonContainer>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  border-bottom: 5px solid #ec524b;
  background: #f9f7cf;
`;

const ButtonContainer = styled.div`
  display: flex;
  min-width: 133px;
`;

export default Header;
