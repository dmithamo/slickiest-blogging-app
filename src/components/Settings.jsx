import React from 'react';
import styled from 'styled-components';
import { SettingsApplicationsOutlined } from '@material-ui/icons';

const Settings = () => (
  <StyledSettings>
    <SettingsApplicationsOutlined fontSize='inherit' />
    <h6>Settings coming soon</h6>
  </StyledSettings>
);

const StyledSettings = styled.div`
  color: green;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  font-size: 200px;
  h6 {
    font-size: 24px;
    color: white;
  }
`;
export default Settings;
