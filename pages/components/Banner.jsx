import React from 'react';
import styled from 'styled-components';

const Banner = () => (
  <StyledBanner>
    <h3>Slick</h3>
    <div>All the stories of yore. And some</div>
  </StyledBanner>
);
const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  width: 99%;
  h3 {
    font-weight: 700;
    font-size: 4rem;
    margin: 0;
  }
  div {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 2rem;
  }
`;

export default Banner;
