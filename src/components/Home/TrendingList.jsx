import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  /* border: 1px solid gray; */
  position: relative;
  min-height: 300px;
  min-width: 150px;
  /* background-color: white; */
  margin: 10px 10px 20px 10px;
`;

const CardPoster = styled.img`
  width: 100%;
  height: 230px;
  border-radius: 10px;
  box-shadow: 2px 2px 7px 7px rgba(71, 71, 71, 0.13);
`;

const Description = styled.div`
  position: relative;
  margin: 20px 8px 5px 8px;
  white-space: normal;
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

export default function TrendingList(props) {
  const releasedDate = props.movieReleaseDate;
  const releasedDate_arr = releasedDate.split('-');
  return (
    <div>
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
    </div>
  );
}
