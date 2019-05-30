import React from 'react';
import styled from 'styled-components';
import { HomeOutlined } from '@material-ui/icons';

const Home = () => (
  <StyledHome>
    <HomeOutlined fontSize='inherit' />
    <h6>
      Welcome to Slick. <br /> <br /> <br />
      Click on one of the stories to read it.
      <br />
    </h6>
    <p>Slicker design for Homepage coming soon.</p>
  </StyledHome>
);

const StyledHome = styled.div`
  color: green;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  font-size: 200px;
  h6 {
    font-size: 24px;
    text-align: center;
    color: white;
  }
  p {
    font-size: 12px;
    color: #333;
  }
`;
export default Home;
