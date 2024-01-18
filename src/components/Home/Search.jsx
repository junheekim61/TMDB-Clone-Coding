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
  border: 3px solid green;
  width: 100%;
  height: 400px;
  background-color: rgb(13, 37, 63);
  display: flex;
`;

const BlueCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(13, 37, 63, 0.8);
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

const SearchBar = styled.div`
  width: 93%;
  height: 50px;
  background-color: white;
  margin: 60px auto;
  border-radius: 25px;
  display: flex;
`;

const SearchInput = styled.input`
  width: 90%;
  height: 70%;
  margin: 5px 0 0 25px;
  font-size: 20px;
  font-weight: 200;
  border-width: 0;
  outline: none;
  ::placeholder &:focus {
    outline: none;
  }
`;

const SearchButton = styled.div`
  background-color: rgb(1, 180, 228);
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  width: 10%;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Banner() {
  const [PopularMovies, setPopularMovies] = useState([]);
  const [MainMoiveImage, setMainMovieImage] = useState({});

  useEffect(() => {
    const PopularMovies = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

    fetch(PopularMovies)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPopularMovies(response.results);
        setMainMovieImage(response.results[Math.floor(Math.random() * 20)]);
      });
  }, []);

  return (
    <MainContainer>
      <WelcomeContainer
        style={{
          backgroundImage: MainMoiveImage
            ? `url(${IMAGE_BASE_URL}w1280${MainMoiveImage.backdrop_path})`
            : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <BlueCover>
          <WelcomeTitle>Welcome.</WelcomeTitle>
          <WelcomeSmallTitle>
            Millions of movies, TV shows and people to discover. Explore now.
          </WelcomeSmallTitle>
          <SearchBar>
            <SearchInput placeholder="영화, TV 프로그램, 인물 검색..."></SearchInput>
            <SearchButton>Search</SearchButton>
          </SearchBar>
        </BlueCover>
      </WelcomeContainer>
    </MainContainer>
  );
}
