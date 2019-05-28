import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ListAltOutlined } from '@material-ui/icons';

// my components
import StyledNav from './Nav';

const Home = () => (
  <Section>
    <Logo>
      Slick
      <ListAltOutlined />
    </Logo>
    <Introtext>
      This is not a drill. It's the slickiest todo list app you will ever see
    </Introtext>
  </Section>
);

const Logo = styled.div`
  color: green;
  font-size: 1.5em;
  font-weight: bold;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  width: 10%;
  border: 1px solid green;
  border-radius: 1rem;
`;

const Introtext = styled.h3``;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`;
export default Home;
