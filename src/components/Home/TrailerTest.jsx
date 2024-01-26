import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config/Config';
import TrailerList from './TrailerListTest';

const MainContainer = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  min-height: 400px;
`;

const BlueCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(13, 37, 63, 0.8);
`;

const TopContainer = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 60px;
  /* background-color: rgb(255, 255, 255); */
  display: flex;
`;

const ConatinerTitle = styled.div`
  /* border: 1px solid green; */
  height: 40px;
  font-weight: 500;
  margin: 30px 0 0 30px;
  font-size: 25px;
  color: white;
`;

const TrendingOptionBar = styled.div`
  border: 1px solid rgb(144, 206, 161);
  width: 150px;
  height: 32px;
  display: flex;
  border-radius: 25px;
  margin: 24px 0 0 30px;
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
  background: linear-gradient(-45deg, rgb(144, 206, 161), rgb(1, 180, 228));
  background: ${(props) =>
    props.TrendingOpt === 'day'
      ? 'linear-gradient(-45deg, rgb(144, 206, 161), rgb(1, 180, 228));rgb(144, 206, 161)'
      : 'none'};
  color: rgb(13, 37, 63);;
  color: ${(props) => (props.TrendingOpt === 'day' ? 'rgb(13, 37, 63);' : 'white')};
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
  background: linear-gradient(-45deg, rgb(144, 206, 161), rgb(1, 180, 228));
  background: ${(props) =>
    props.TrendingOpt === 'week'
      ? 'linear-gradient(-45deg, rgb(144, 206, 161), rgb(1, 180, 228));rgb(144, 206, 161)'
      : 'none'};
  color: white;
  color: ${(props) => (props.TrendingOpt === 'week' ? 'rgb(13, 37, 63);' : 'white')};
`;

const TrendingListContainer = styled.div`
  /* border: 2px solid purple; */
  width: 100%;
  min-height: 330px;
  margin: 20px 0 0 0;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  background-size: cover;
`;

const Space = styled.div`
  /* border: 1px solid pink; */
  min-width: 20px;
`;

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const [videos, setVideos] = useState([]);
  const [TrailerBackImage, setTrailerBackImage] = useState({});
  const [TrendingOption, setTrendingOption] = useState('day');

  const getVideos = async (id) => {
    /// 주석
    const videosURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`;

    try {
      const response = await fetch(videosURL);
      const videoData = await response.json();
      return videoData.results[0] || null; // 첫 번째 비디오만 사용하거나, 비디오가 없으면 null을 반환
    } catch (error) {
      console.error('Error fetching videos', error);
      return null;
    }
  };

  const getMovies = async () => {
    /// 주석
    const moviesURL = `${API_URL}trending/movie/${TrendingOption}?api_key=${API_KEY}&language=ko-KR`;

    try {
      const response = await fetch(moviesURL);
      const movieData = await response.json();

      const moviesWithVideos = await Promise.all(
        movieData.results.map(async (movie) => {
          const video = await getVideos(movie.id);
          return { ...movie, video };
        }),
      );
      setMovies(moviesWithVideos);
      setTrailerBackImage(moviesWithVideos[0]);
    } catch (error) {
      console.error('Error fetching movies', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [TrendingOption]);

  const handleChangeTrendingToWeek = () => {
    setTrendingOption('week');
  };

  const handleChangeTrendingToToday = () => {
    setTrendingOption('day');
  };

  return (
    <MainContainer
      style={{
        backgroundImage: TrailerBackImage
          ? `url(${IMAGE_BASE_URL}w1280${TrailerBackImage.backdrop_path})`
          : 'none',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <BlueCover>
        <TopContainer>
          <ConatinerTitle>최신 예고편</ConatinerTitle>
          <TrendingOptionBar>
            <OptionBoxLeft
              onClick={handleChangeTrendingToToday}
              TrendingOpt={TrendingOption}
            >
              오늘
            </OptionBoxLeft>
            <OptionBoxRight
              onClick={handleChangeTrendingToWeek}
              TrendingOpt={TrendingOption}
            >
              이번 주
            </OptionBoxRight>
          </TrendingOptionBar>
        </TopContainer>
        <TrendingListContainer>
          <Space></Space>
          {movies &&
            movies.map((movie, index) => (
              <React.Fragment key={index}>
                {movie.video && ( // movie에 video가 존재하는 경우에만 렌더링
                  <TrailerList
                    backgroundImg={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.title}
                    movieReleaseDate={movie.release_date}
                    videosKey={movie.video.key}
                    videosName={movie.video.name}
                  />
                )}
              </React.Fragment>
            ))}
          <Space></Space>
        </TrendingListContainer>
      </BlueCover>
    </MainContainer>
  );
}
