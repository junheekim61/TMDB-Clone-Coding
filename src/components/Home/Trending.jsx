import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config/Config';
import TrendingList from './TrendingList';
import trendingBackgroundImg from '/Users/junhee/Desktop/web_2023/umc_study/winter_study/cloneCoding/src/data/img/trending_backgound.png';

const MainContainer = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  min-height: 400px;
`;

const TopContainer = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 60px;
  background-color: rgb(255, 255, 255);
  display: flex;
`;

const ConatinerTitle = styled.div`
  /* border: 1px solid green; */
  height: 40px;
  font-weight: 500;
  margin: 20px 0 0 30px;
  font-size: 30px;
`;

const TrendingOptionBar = styled.div`
  border: 1px solid rgb(13, 37, 63);
  width: 150px;
  height: 32px;
  display: flex;
  border-radius: 25px;
  margin: 18px 0 0 30px;
`;

const TXT = styled.p`
  background: linear-gradient(-45deg, rgb(144, 206, 161), rgb(1, 180, 228));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const OptionBoxLeft = styled.div`
  /* border: 1px solid black; */
  font-weight: 500;
  width: 50%;
  height: 100%;
  border-radius: 25px 0 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(13, 37, 63);
  background-color: ${(props) =>
    props.TrendingOpt === 'day' ? 'rgb(13, 37, 63)' : 'white'};
`;

const OptionBoxRight = styled.div`
  /* border: 1px solid black; */
  font-weight: 500;
  width: 50%;
  height: 100%;
  border-radius: 0 25px 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-color: ${(props) =>
    props.TrendingOpt === 'week' ? 'rgb(13, 37, 63)' : 'white'};
`;

const TrendingListContainer = styled.div`
  /* border: 2px solid purple; */
  width: 100%;
  min-height: 330px;
  margin: 10px 0 0 0;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  background-image: url(${trendingBackgroundImg});
  background-size: cover;
`;

const Space = styled.div`
  /* border: 1px solid pink; */
  min-width: 20px;
`;

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
    console.log(TrendingOption);
  }, [TrendingOption]);

  const handleChangeTrendingToWeek = () => {
    setTrendingOption('week');
  };

  const handleChangeTrendingToToday = () => {
    setTrendingOption('day');
  };

  return (
    <MainContainer>
      <TopContainer>
        <ConatinerTitle>트렌딩</ConatinerTitle>
        <TrendingOptionBar>
          <OptionBoxLeft
            onClick={handleChangeTrendingToToday}
            TrendingOpt={TrendingOption}
          >
            <TXT>오늘</TXT>
          </OptionBoxLeft>
          <OptionBoxRight
            onClick={handleChangeTrendingToWeek}
            TrendingOpt={TrendingOption}
          >
            <TXT>이번 주</TXT>
          </OptionBoxRight>
        </TrendingOptionBar>
      </TopContainer>
      <TrendingListContainer>
        <Space></Space>
        {TrendingMovies &&
          TrendingMovies.map((movie, index) => (
            <React.Fragment key={index}>
              <TrendingList
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                    : null
                }
                movieId={movie.id}
                movieName={movie.title}
                movieReleaseDate={movie.release_date}
              />
            </React.Fragment>
          ))}
        <Space></Space>
      </TrendingListContainer>
    </MainContainer>
  );
}
