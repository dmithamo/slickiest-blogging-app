import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

// Icons
import {
  HomeOutlined,
  CalendarTodayOutlined,
  SettingsApplicationsOutlined,
  ListAltOutlined,
  CreateOutlined,
} from '@material-ui/icons';

// My components
import Nav from './Nav';
import Home from './Home';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import Calendar from './Calendar';
import Settings from './Settings';

// Sample links
const navLinks = [
  { icon: <HomeOutlined fontSize='inherit' />, to: '/home', component: Home },
  {
    icon: <CreateOutlined fontSize='inherit' />,
    to: '/new-todo',
    component: NewTodo,
  },
  {
    icon: <ListAltOutlined fontSize='inherit' />,
    to: '/todo-list',
    component: TodoList,
  },
  {
    icon: <CalendarTodayOutlined fontSize='inherit' />,
    to: '/calendar',
    component: Calendar,
  },
  {
    icon: <SettingsApplicationsOutlined fontSize='inherit' />,
    to: '/settings',
    component: Settings,
  },
];

const Main = () => {
  return (
    <Container>
      <Nav navLinks={navLinks} />
      <div>
        {navLinks.map((link) => (
          <Route
            key={link.to}
            exact
            path={link.to}
            component={link.component}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 14fr;
`;

export default Main;
