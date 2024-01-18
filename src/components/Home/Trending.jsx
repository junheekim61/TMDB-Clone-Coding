import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config/Config';


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

const TrendingOptionBar = styled.div`
  
`

export default function Trending() {

  const [TrendingMovies, setTrendingMovies] = useState([]);
  const [TrendingOption, setTrendingOption] = useState('day');

  useEffect(() => {
    const trendingMovies = `${API_URL}trending/movie/${TrendingOption}?api_key=${API_KEY}&language=ko-KR`;

    fetch(trendingMovies)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTrendingMovies(response.results);
      });
  }, []);

  return (
      <MainContainer>
        <WelcomeContainer>
          <WelcomeTitle>트렌딩</WelcomeTitle>
          <TrendingOptionBar></TrendingOptionBar>
        </WelcomeContainer>
      </MainContainer>
  );
}



