import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import Filter from './Sidebar';
import MovieList from './MovieList';
import { Row } from 'antd';

const PageTitle = styled.h1`
  font-size: 2rem;
  margin: 30px 0 20px 0;
`;
const Container = styled.div`
  border: 1px solid yellow;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const MovieListContainer = styled.div`
  border: 3px solid blue;
  width: 1100px;
  height: 1500px;
`;

export default function Movie(props) {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies(response.results);
      });
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <PageTitle>인기 영화</PageTitle>
      <Container>
        <Filter />
        <MovieListContainer>
          <Row gutter={[32,32]}>
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
                    movieName={movie.original_title}
                  />
                </React.Fragment>
              ))}
          </Row>
        </MovieListContainer>
      </Container>
    </div>
  );
}
