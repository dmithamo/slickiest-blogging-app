import React from 'react';
import styled from 'styled-components';
import { ListAltOutlined } from '@material-ui/icons';

const TodoList = () => (
  <StyledTodoList>
    <ListAltOutlined fontSize='inherit' />
    <h6>TodoList coming soon</h6>
  </StyledTodoList>
);

const StyledTodoList = styled.div`
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
export default TodoList;
