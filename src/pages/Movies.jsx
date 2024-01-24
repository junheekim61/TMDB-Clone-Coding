import React from 'react';
import styled from 'styled-components';
import Movie from '../components/Movies/Movie';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
`;

const MainContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  /* background: lightgray; */
`;

export default function Movies() {
  return (
    <Container>
      <MainContainer>
        <Movie />
      </MainContainer>
    </Container>
  );
}
