import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';

const Column = styled(Col)`
  display: flex;
`;

const Card = styled.div`
  /* border: 1px solid gray; */
  position: relative;
  min-height: 360px;
  width: 182px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 3px rgba(71, 71, 71, 0.218);
  background-color: white;
`;

const CardPoster = styled.img`
  width: 100%;
  height: 260px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Description = styled.div`
  position: relative;
  margin: 20px 8px 5px 8px;
`;

const MovieTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const MovieDiscription = styled.p`
  color: gray;
  font-size: 1rem;
  margin-bottom: 15px;
`;

export default function MovieList(props) {
  const releasedDate = props.movieReleaseDate;
  const releasedDate_arr = releasedDate.split('-');
  return (
    <Column lg={24 / 5} md={(8 / 5) * 2} xs={(24 / 5) * 4}>
      <Card>
        <a href={`/movie/${props.movieId}`}>
          <CardPoster src={props.image} alt={props.movieName} />
        </a>
        <Description>
          <MovieTitle>{props.movieName}</MovieTitle>
          <MovieDiscription>
            {releasedDate_arr[1]}월 {releasedDate_arr[2]}, {releasedDate_arr[0]}
          </MovieDiscription>
        </Description>
      </Card>
    </Column>
  );
}
