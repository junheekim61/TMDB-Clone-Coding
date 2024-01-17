import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config/Config';
import MovieList from './MovieList';
import { Row } from 'antd';
import SideBar from './Sidebar';

const Container = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  border: 1px solid yellow;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0;
`;

const MovieListContainer = styled.div`
  border: 3px solid blue;
  width: 1100px;
`;

const MoreButton = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: rgb(1, 180, 228);
  color: white;
  margin: 30px 0 26px 0;
`;

export default function Movie(props) {
  const [Movies, setMovies] = useState([]);
  const [MoviePageCount, setMoviePageCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${MoviePageCount}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies((prevMovies) => {
          // 만약 첫 페이지라면 새로운 데이터로 설정하고, 그렇지 않으면 기존 데이터와 새로운 데이터를 병합
          return MoviePageCount === 1
            ? [...response.results]
            : [...prevMovies, ...response.results];
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    // 초기 로딩 시 데이터를 가져오도록 변경
    fetchMovies();
  }, []); // 빈 배열로 한 번만 실행되도록 설정

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight * 0.8 && !loading) {
      setLoading(true);
      setMoviePageCount((prevPageCount) => prevPageCount + 1);
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]); // loading이 변경될 때마다 useEffect 다시 실행

  const handleMoreButtonClick = () => {
    setLoading(true);
    setMoviePageCount((prevPageCount) => prevPageCount + 1);
    fetchMovies(); // 버튼을 눌렀을 때 fetchMovies 함수 호출
  };

  return (
    <Container>
      <ContentContainer>
        <SideBar />
        <MovieListContainer>
          <Row gutter={[32, 32]}>
            {Movies &&
              Movies.map((movie, index) => (
                <React.Fragment key={index}>
                  <MovieList
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
          </Row>
          {loading && Movies.length === 0 && <p>Loading...</p>}
          {Movies.length > 0 && (
            <MoreButton onClick={handleMoreButtonClick}>더 불러오기</MoreButton>
          )}
        </MovieListContainer>
      </ContentContainer>
    </Container>
  );
}
