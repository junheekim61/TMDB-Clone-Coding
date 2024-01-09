import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  background-color: rgb(11, 29, 51);
`;

const FooterContainer = styled.div`
  /* background-color: rgba(255, 255, 255, 0.164); */
  width: 70%;
  height: 250px;
  margin-top: 50px;
  display: flex;
`;

const LogoBox = styled.div`
  /* border: 1px solid red; */
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.img`
  height: 180px;
  align-self: flex-end;
`;

const HelloNickname = styled.div`
  /* border: 1px solid red; */
  min-width: 230px;
  height: 110px;
  margin-top: 18px;
  margin-right: 5px;
  color: #49bde0;
  font-size: 22px;
  font-weight: bold;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 0 rgb(34, 34, 34);
  background-color: white;
`;

const LinkContainer = styled.div`
  /* border: 1px solid green; */
  min-width: 170px;
  height: 150px;
  font-size: 20px;
  color: white;
  margin: 80px 10px 0 25px;
  display: flex;
  flex-direction: column;
`;

const LinkCategories = styled.p`
  font-size: 20px;
  margin: 0 0 5px 0;
  font-weight: bold;
`;
const LinkBox = styled(Link)`
  /* border: 1px solid yellow; */
  width: 100%;
  height: 20px;
  font-weight: lighter;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: start;
  margin: 5px 5px 3px 0;
`;

export default function Footer() {
  return (
    <Container>
      <FooterContainer>
        <LogoBox>
          <FooterLogo src={require('../data/img/FooterLogo.png')} alt="FooterImage" />
          <HelloNickname>안녕하세요 nancy61!</HelloNickname>
        </LogoBox>

        <LinkContainer>
          <LinkCategories>THE BASICS</LinkCategories>
          <LinkBox>TMDb에 대해</LinkBox>
          <LinkBox>문의하기</LinkBox>
          <LinkBox>Support Forums</LinkBox>
          <LinkBox>API</LinkBox>
          <LinkBox>System Status</LinkBox>
        </LinkContainer>

        <LinkContainer>
          <LinkCategories>참여하기</LinkCategories>
          <LinkBox>기여 지침서</LinkBox>
          <LinkBox>새 영화 추가</LinkBox>
          <LinkBox>새 TV 프로그램 추가</LinkBox>
        </LinkContainer>

        <LinkContainer>
          <LinkCategories>커뮤니티</LinkCategories>
          <LinkBox>가이드라인</LinkBox>
          <LinkBox>토론 내역</LinkBox>
          <LinkBox>기여 랭킹</LinkBox>
        </LinkContainer>

        <LinkContainer>
          <LinkCategories>법적 사항</LinkCategories>
          <LinkBox>서비스 이용약관</LinkBox>
          <LinkBox>API Terms of Use</LinkBox>
          <LinkBox>개인정보약관</LinkBox>
          <LinkBox>DMCA Policy</LinkBox>
        </LinkContainer>
      </FooterContainer>
    </Container>
  );
}
