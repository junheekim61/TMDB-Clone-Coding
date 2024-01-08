import React from 'react';
import styled from 'styled-components';
// import { ReactComponent as FirstImg } from '../data/img/ad.svg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: white;
`;

const MainContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: lightgray;
`;

const WelcomeContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgb(5, 15, 27);
`;

const WelcomeTitle = styled.div`
  font-weight: bold;
  margin: 90px 0 0 60px;
  font-size: 60px;
  color: white;
`;

const WelcomeSmallTitle = styled.div`
  margin: 5px 0 0 60px;
  font-size: 35px;
  color: white;
`;

export default function Home() {
  return (
    <Container>
      <MainContainer>
        <WelcomeContainer>
          <WelcomeTitle>Welcome.</WelcomeTitle>
          <WelcomeSmallTitle>Millions of movies, TV shows and people to discover. Explore now.</WelcomeSmallTitle>
        </WelcomeContainer>
        {/* <FirstImg /> */}
      </MainContainer>
    </Container>
  );
}
