import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  border: 1px solid red;
  width: 90%;
  display: flex;
  justify-content: center;
`;

const WelcomeContainer = styled.div`
  border: 3px solid yellow;
  width: 100%;
  height: 400px;
`;

const WelcomeTitle = styled.div`
  font-weight: bold;
  margin: 90px 0 0 60px;
  font-size: 60px;
`;

export default function Trailer() {
  return (
    <MainContainer>
      <WelcomeContainer>
        <WelcomeTitle>최신 예고편</WelcomeTitle>
      </WelcomeContainer>
    </MainContainer>
  );
}
