import React from 'react';
import Banner from '../components/Home/Search';
import Trending from '../components/Home/Trending';
import styled from 'styled-components';
import Trailer from '../components/Home/Trailer';
import Popular from '../components/Home/Popular';
import FreeWatch from '../components/Home/FreeWatch';
import LeaderBoard from '../components/Home/LeaderBoard';

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
