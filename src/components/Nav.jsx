import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = ({ className, navLinks }) => {
  return (
    <StyledNav className={className}>
      {navLinks.map((li) => (
        <NavLink key={li.to} icon={li.icon} to={li.to} />
      ))}
    </StyledNav>
  );
};

const NavLink = ({ icon, to }) => <StyledLink to={to}>{icon}</StyledLink>;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  color: white;
  font-size: 28px;
  :hover,
  :focus {
    color: green;
  }
`;
export default Nav;
