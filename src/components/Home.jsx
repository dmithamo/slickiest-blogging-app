import React from 'react';
import styled from 'styled-components';
import { ListAltOutlined } from '@material-ui/icons';

const Home = () => (
  <p>
    This is not a drill. It's{' '}
    <AppName>
      <span>Slick</span>
      <ListAltOutlined />
    </AppName>
    , which is the slickiest todo list app you have ever seen
  </p>
);

const AppName = styled.span`
  color: green;
  span {
    font-size: 1.01em;
    font-weight: bold;
  }
`;
export default Home;
