import React, { Fragment } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { ListAltOutlined } from '@material-ui/icons';

const listOfTodos = [
  { title: 'Move to China', dueDate: '10.02.2019' },
  { title: 'Buy that girl a car', dueDate: '11.05.2019' },
  { title: 'Move back from China', dueDate: '11.05.2019' },
  { title: 'Move to Kenya', dueDate: '11.05.2019' },
  { title: 'Dont unMarry that girl', dueDate: '11.05.2019' },
  { title: 'Move to the China', dueDate: '11.05.2019' },
];
const TodoList = ({ match }) => (
  <Container>
    <StyledListContainer>
      <StyledHeader>
        <ListAltOutlined fontSize='inherit' />
      </StyledHeader>

      {listOfTodos.map((todo) => {
        return (
          <StyledTodoItem key={todo.title.toLowerCase()}>
            <StyledLink
              to={`${match.url}/:${todo.title
                .toLowerCase()
                .replace(/ /g, '-')}`}
            >
              {todo.title}
            </StyledLink>
            <p>{todo.dueDate}</p>
          </StyledTodoItem>
        );
      })}
    </StyledListContainer>
  </Container>
);

const FakeComp = ({ match }) => <h4>This is the fakest fake {match.params}</h4>;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

const StyledHeader = styled.header`
  font-size: 32px;
  font-weight: bold;
  text-align: start;
  padding: 2rem 1.2rem;
  color: green;
`;

const StyledListContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const StyledTodoItem = styled.div`
  padding: 1.2rem;
  text-align: start;
  margin-bottom: 4px;
  font-size: 14px;
  p {
    color: #333;
    font-size: 12px;
  }
  :hover {
    font-weight: bold;
    p {
      color: #ffffff8a;
    }
  }
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const StyledDetailsContainer = styled.div`
  h4 {
    color: green;
    font-size: 24px;
  }
  border-radius: 5%;
  border: 1px dotted green;
  height: 100vh;
  padding: 0 2rem;
  margin: 2rem 5rem 0;
`;
export default TodoList;
