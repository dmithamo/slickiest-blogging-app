import React from 'react';
import styled from 'styled-components';
import { CreateOutlined } from '@material-ui/icons';

const NewStory = () => (
  <StyledNewStory>
    <CreateOutlined fontSize='inherit' />
    <h6>New Story coming soon</h6>
  </StyledNewStory>
);

const StyledNewStory = styled.div`
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
export default NewStory;
