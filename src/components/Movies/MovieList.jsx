import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';

const Card = styled.div`
  position: relative;
  height: 360px;
  width: 182px;
  border: 1px solid red;
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
  margin: 20px 10px 5px 10px;
  font-size: 1.3rem;
`;

export default function MovieList(props) {
  return (
    <Col lg={24 / 5} md={(8 / 5) * 2} xs={(24 / 5) * 4}>
      <Card>
        <a href={`/movie/${props.movieId}`}>
          <CardPoster src={props.image} alt={props.movieName} />
        </a>
        <Description>
          <h1>Title</h1>
          <p1>release date</p1>
        </Description>
      </Card>
    </Col>
  );
}
