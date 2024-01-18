import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(13, 37, 63);
`;

const PageContainer = styled.div`
  /* border: 1px solid red; */
  width: 70%;
  height: 100%;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoLinkBox = styled(Link)`
`;

const Logo = styled.img`
  width: 154px;
`;

const LinkContainer = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  height: 40px;
  color: white;
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LinkBox = styled(Link)`
  /* border: 1px solid yellow; */
  width: 100px;
  height: 30px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoreLinkBox = styled(Link)`
  /* border: 1px solid yellow; */
  width: 75px;
  height: 30px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default function Header() {

  return (
    <Container>
      <PageContainer>
        <HeaderContainer>
          <LogoLinkBox to="/">
            <Logo
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB"
            />
          </LogoLinkBox>

          <LinkContainer>
            <LinkBox to="/movie">영화</LinkBox>
            <LinkBox to="/tv">TV프로그램</LinkBox>
            <LinkBox to="/celebrity">인물</LinkBox>
            <MoreLinkBox to="/more">More</MoreLinkBox>
          </LinkContainer>
        </HeaderContainer>
      </PageContainer>
    </Container>
  );
}
