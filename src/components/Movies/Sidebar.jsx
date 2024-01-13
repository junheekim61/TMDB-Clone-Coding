import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  border: 1px solid red;
  width: 300px;
  height: 1500px;
`;

export default function Filter() {
  return (
    <FilterContainer>
      <div>정렬</div>
      <div>Where To Watch</div>
      <div>필터</div>
      <div>검색</div>
    </FilterContainer>
  );
}
