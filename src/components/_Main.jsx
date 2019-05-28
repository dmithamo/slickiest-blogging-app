import React from 'react';
import styled from 'styled-components';
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

const Main = () => {
  return (
    <Container>
      <Nav
        navItems={[
          { icon: <HomeOutlined />, name: 'go-home', to: '/home' },
          { icon: <CreateOutlined />, name: 'make-new', to: '/create-todo' },
          { icon: <ListAltOutlined />, name: 'view-list', to: '/view-todos' },
          {
            icon: <CalendarTodayOutlined />,
            name: 'view-on-calendar',
            to: '/view-on-calendar',
          },
          {
            icon: <SettingsApplicationsOutlined />,
            name: 'settings',
            to: '/settings',
          },
        ]}
      />
      <Home />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 14fr;
`;

export default Main;
