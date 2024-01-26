import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Card = styled.div`
  /* border: 1px solid gray; */
  position: relative;
  min-height: 200px;
  min-width: 300px;
  /* background-color: white; */
  margin: 10px 20px 20px 10px;
`;

const CardPoster = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 7px;
  box-shadow: 2px 2px 7px 7px rgba(71, 71, 71, 0.13);
`;

const Description = styled.div`
  position: relative;
  margin: 20px 8px 5px 8px;
  white-space: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MovieTitle = styled.a`
  color: white;
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 10px;
  text-decoration: none;
`;

const MovieDiscription = styled.a`
  color: #ffffffb1;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 15px;
  text-decoration: none;
`;

export default function TrailerList(props) {
  return (
    <div>
      <Card>
        <a href={`/movie/${props.movieId}`}>
          <CardPoster
            style={{
              backgroundImage: props.image ? props.image : 'none',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </a>
        <Description>
          <MovieTitle href={`/movie/${props.movieId}`}>
            {props.movieName}
          </MovieTitle>
          <MovieDiscription href={`/movie/${props.movieId}`}>
            {props.videosName}
          </MovieDiscription>
        </Description>
      </Card>
    </div>
  );
}
