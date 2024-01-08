import React from 'react'
import styled from 'styled-components';

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


export default function Movie() {
  return (
    <Container>
      <MainContainer>Movie</MainContainer>
    </Container>
  );
}
