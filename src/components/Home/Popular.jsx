import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  border: 1px solid red;
  width: 90%;
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

export default function Popular() {
  return (
      <MainContainer>
        <WelcomeContainer>
          <WelcomeTitle>Popular</WelcomeTitle>
        </WelcomeContainer>
      </MainContainer>
  );
}



