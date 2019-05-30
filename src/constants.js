import React from 'react';

// My components
import Home from './components/Home';
import NewStory from './components/NewStory';
import Calendar from './components/Calendar';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';

// Icons
import {
  HomeOutlined,
  CreateOutlined,
  CalendarTodayOutlined,
  SettingsApplicationsOutlined,
  AccountCircleOutlined,
} from '@material-ui/icons';

// Sample links
export const navLinks = [
  {
    icon: <HomeOutlined fontSize='inherit' />,
    to: '/stories-list',
    component: Home,
  },
  {
    icon: <CreateOutlined fontSize='inherit' />,
    to: '/new-story',
    component: NewStory,
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
  {
    icon: <AccountCircleOutlined fontSize='inherit' />,
    to: '/user-profile',
    component: UserProfile,
  },
];

// Sample storys

// List of stories
export const listOfStories = [
  {
    storyID: 1,
    title: 'I Never Really Knew Him',
    publishedOn: '10.02.2019',
    description: 'This is a story about',
  },
  {
    storyID: 2,
    title: 'I Coulda Sworn',
    publishedOn: '11.05.2019',
    description: 'This is a story about',
  },
  {
    storyID: 3,
    title: 'Move',
    publishedOn: '11.05.2019',
    description: 'This is a story about',
  },
  {
    storyID: 4,
    title: 'Kenya. Or The Patriot',
    publishedOn: '11.05.2019',
    description: 'This is a story about',
  },
  {
    storyID: 5,
    title: 'Winter is Coming',
    publishedOn: '11.05.2019',
    description: 'This is a story about',
  },
  {
    storyID: 6,
    title: 'And Which one of You',
    publishedOn: '11.05.2019',
    description: 'This is a story about',
  },
];
