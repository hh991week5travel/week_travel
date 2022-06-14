import React from 'react'
import styled from 'styled-components';

import Button from '../elements/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';



const Header = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)


    return (


        <HeaderContainer>
            <Link to='/Main'>
                <img src='logo_1.png'
                    back_size="100% 100%"
                    height="100px"
                    alt='logo' />
            </Link>

            <ButtonContainer>
                <Button
                    text-size="16px"
                    width="120px"
                    bg="#F9F7CF"
                    _onClick={() => {
                        dispatch(userActions.logOut());
                        navigate('/')
                    }}
                >
                    <span size="20px">로그아웃</span>
                </Button>
            </ButtonContainer>

        </HeaderContainer>






    );

};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  border-bottom: 5px solid #EC524B;
  background: #F9F7CF;
`;

const ButtonContainer = styled.div`
  display: flex;
  min-width: 133px;
`;




export default Header