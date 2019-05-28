import React from 'react';
import styled from 'styled-components';
import { HomeOutlined } from '@material-ui/icons';

const Home = () => (
  <StyledHome>
    <HomeOutlined fontSize='inherit' />
    <h6>
      This is not a drill. This is the slickiest todo list app you will ever
      see.
      <br />
      Homepage coming soon.
    </h6>
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
`;
export default Home;
