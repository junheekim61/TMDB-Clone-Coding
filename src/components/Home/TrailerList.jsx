import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Container = styled.div`
  /* border: 1px solid red; */
  height: 300px;
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 1s ease-in-out;
`;

const Card = styled.div`
  /* border: 1px solid gray; */
  height: 200px;
  width: 300px;
  margin: 10px 0 0 0;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`;

const CardPoster = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  height: 200px;
  border-radius: 7px;
  box-shadow: 2px 2px 7px 7px rgba(71, 71, 71, 0.13);
  transition: transform 0.5s ease-in-out;

  background-image: ${(props) =>
    props.image ? `url(${props.image})` : 'none'};
  background-size: cover;
  background-repeat: no-repeat;
`;

const DetailLink = styled.a`
  text-decoration: none;
  position: absolute;
  margin: 210px 0 0 0;
`;

const Description = styled.div`
  /* border: 1px solid yellow; */
  position: relative;
  margin: 20px 8px 5px 8px;
  white-space: normal;
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.a`
  color: white;
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

const MovieDiscription = styled.a`
  color: #ffffffb1;
  width: 300px;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export default function TrailerList(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <Card
        style={{}}
        onMouseEnter={() => setIsHovered(true)} // 마우스가 올라갔을 때 isHovered를 true로 설정
        onMouseLeave={() => setIsHovered(false)} // 마우스가 벗어났을 때 isHovered를 false로 설정
      >
        <CardPoster
          style={{
            backgroundImage: props.image ? props.image : 'none',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Card>
      <DetailLink href={`/movie/${props.movieId}`}>
        <Description>
          <MovieTitle href={`/movie/${props.movieId}`}>
            {props.movieName}
          </MovieTitle>
          <MovieDiscription href={`/movie/${props.movieId}`}>
            {props.videosName}
          </MovieDiscription>
        </Description>
      </DetailLink>
    </Container>
  );
}
