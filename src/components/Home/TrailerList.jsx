import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Card = styled.div`
  /* border: 1px solid gray; */
  position: relative;
  min-height: 300px;
  min-width: 150px;
  /* background-color: white; */
  margin: 10px 20px 20px 10px;
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
  font-size: 1.2rem;
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

export default function TrendingList(props) {
  const releasedDate = props.movieReleaseDate;
  const releasedDate_arr = releasedDate.split('-');
  return (
    <div>
      <Card>
        <YouTube
          videoId={props.videosKey}
          opts={{
            width: '300px',
            height: '200px',
          }}
        />
        <Description>
          <MovieTitle href={`/movie/${props.movieId}`}>{props.movieName}</MovieTitle>
          <MovieDiscription href={`/movie/${props.movieId}`}>{props.videosName}</MovieDiscription>
        </Description>
      </Card>
    </div>
  );
}
