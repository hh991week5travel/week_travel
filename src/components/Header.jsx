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
        <Link to="/Main" style={{ height: "100%", marginLeft: "10px" }}>
          <img
            src="logo_3.png"
            back_size="100% 100%"
            alt="logo"
            style={{ height: "100%" }}
          />
        </Link>
        <Buttons
          style={{ width: "100px", padding: "10px" }}
          _onClick={() => {
            dispatch(userActions.logOut());
            navigate("/");
            deleteCookie("token");
          }}
        >
          logout
        </Buttons>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  border-bottom: 3px solid #2e2727;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  padding: 20px;
  height: 60px;
`;

export default Header;
