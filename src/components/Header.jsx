import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Header = (props) => {


    return (

        <>
            <HeaderContainer>
                <Link to='/Main'>
                    <img src='logo_1.png'
                        back_size="100% 100%"
                        height="100px"
                        alt='logo' />
                </Link>

                <ButtonContainer>
                    <Link to='/'>
                        <button>
                            <text size="20px">로그아웃</text>
                        </button>
                    </Link>
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
  border-bottom: 5px solid #EC524B;
  background: #F9F7CF;
`;

const ButtonContainer = styled.div`
  display: flex;
  min-width: 133px;
`;




export default Header