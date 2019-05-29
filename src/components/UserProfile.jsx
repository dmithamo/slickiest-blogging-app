import React from 'react';
import styled from 'styled-components';
import { AccountCircleOutlined } from '@material-ui/icons';

const UserProfile = () => (
  <StyledUserProfile>
    <AccountCircleOutlined fontSize='inherit' />
    <h6>UserProfile coming soon</h6>
  </StyledUserProfile>
);

const StyledUserProfile = styled.div`
  color: green;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  font-size: 200px;
  h6 {
    color: white;
    font-size: 24px;
  }
`;
export default UserProfile;
