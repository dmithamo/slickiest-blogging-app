import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// Icons
import {
  HomeOutlined,
  CreateOutlined,
  CalendarTodayOutlined,
  AccountCircleOutlined,
} from '@material-ui/icons';

const Nav = () => (
  <Navbar>
    <Link href="/">
      <StyledAnchorTag>
        <HomeOutlined fontSize="inherit" />
      </StyledAnchorTag>
    </Link>

    <Link href="/newstory">
      <StyledAnchorTag>
        <CreateOutlined fontSize="inherit" />
      </StyledAnchorTag>
    </Link>

    <Link href="/profile">
      <StyledAnchorTag>
        <AccountCircleOutlined fontSize="inherit" />
      </StyledAnchorTag>
    </Link>

    <Link href="/calendar">
      <StyledAnchorTag>
        <CalendarTodayOutlined fontSize="inherit" />
      </StyledAnchorTag>
    </Link>
  </Navbar>
);

const Navbar = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  margin: auto;
`;

const StyledAnchorTag = styled.a`
  cursor: pointer;
  color: white;
  font-size: 28px;
  border-top: 2px solid white;
  padding: 1rem;
  width: 25%;
  text-align: center;
  margin: 0;
  :hover,
  :focus,
  :active {
    color: green;
    border-top: 2px solid green;
  }
`;
export default Nav;
