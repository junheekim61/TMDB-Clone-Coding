import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  border: 1px solid red;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const WelcomeContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgb(255, 255, 255);
`;

const WelcomeTitle = styled.div`
  font-weight: bold;
  margin: 90px 0 0 60px;
  font-size: 60px;
`;

export default function Trending() {
  return (
      <MainContainer>
        <WelcomeContainer>
          <WelcomeTitle>트렌딩</WelcomeTitle>
        </WelcomeContainer>
      </MainContainer>
  );
}



