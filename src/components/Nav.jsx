import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = ({ className, navItems }) => {
  return (
    <StyledUL className={className}>
      {navItems.map((li) => (
        <NavItem key={li.to} icon={li.icon} to={li.to} />
      ))}
    </StyledUL>
  );
};

const NavItem = ({ icon, to }) => <StyledLink to={to}>{icon}</StyledLink>;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 24px;
  color: white;
  :hover,
  :focus {
    color: green;
  }
`;
export default Nav;
