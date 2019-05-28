import React from 'react';
import styled from 'styled-components';
import { CopyrightOutlined } from '@material-ui/icons';

const Copyright = () => (
  <StyledCopyright>
    A{' '}
    <a target='_blank' href='https://github.com/dmithamo1'>
      dmithamo
    </a>{' '}
    product{' '}
    <span>
      <CopyrightOutlined fontSize='inherit' />
      2019
    </span>{' '}
  </StyledCopyright>
);

const StyledCopyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1em;
  border-radius: 2em;
  border: 1px solid green;
  width: 15%;
  margin: 2em 85%;
  box-sizing: border-box;
  text-align: center;
  opacity: 0.2;
  position: relative;
  z-index: 1000;
  :hover {
    opacity: 1;
  }
  a {
    color: green;
    text-decoration: none;
  }
  span {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
  }
`;

export default Copyright;
