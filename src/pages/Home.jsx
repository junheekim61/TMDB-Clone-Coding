import React from 'react';
import Banner from '../components/Banner';
import Trending from '../components/Trending';
import styled from 'styled-components';
import Trailer from '../components/Trailer';
import Popular from '../components/Popular';
import FreeWatch from '../components/FreeWatch';
import LeaderBoard from '../components/LeaderBoard';

// import { ReactComponent as FirstImg } from '../data/img/ad.svg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
`;

export default function Home() {
  return (
    <Container>
      <Banner />
      <Trending />
      <Trailer />
      <Popular />
      <FreeWatch />
      <LeaderBoard />
    </Container>
  );
}
