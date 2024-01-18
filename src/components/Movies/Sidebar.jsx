import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  /* border: 1px solid red; */
  width: 300px;
  height: 1500px;
`;

const BarMenu = styled.div`
  /* border: 1px solid gray; */
  background-color: white;
  width: 90%;
  height: 50px;
  font-weight: bold;
  margin: 0 0 15px 0;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 3px rgba(71, 71, 71, 0.218);
  display: flex;
`;

const BarText = styled.div`
  /* border: 1px solid blue; */
  width: 150px;
  height: 100%;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin: 0 42px 0 10px;
`;

const BarIcon = styled.div`
  /* border: 1px solid red; */
  width: 50px;
  height: 100%;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SideBar() {
  return (
    <FilterContainer>
      <BarMenu>
        <BarText>정렬</BarText>
        <BarIcon>{'>'}</BarIcon>
      </BarMenu>
      <BarMenu>
        <BarText>Where To Watch</BarText>
        <BarIcon>{'>'}</BarIcon>
      </BarMenu>
      <BarMenu>
        <BarText>필터</BarText>
        <BarIcon>{'>'}</BarIcon>
      </BarMenu>
      <BarMenu>
        <BarText>검색</BarText>
        <BarIcon>{'>'}</BarIcon>
      </BarMenu>
    </FilterContainer>
  );
}
