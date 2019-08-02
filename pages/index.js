import React from 'react';
import Layout from './components/Layout';
import StoryListContainer from './components/StoryListContainer';
import stories from './helpers/constants';

const Home = ({ storyList }) => (
  <Layout>
    <StoryListContainer storyList={storyList} />
  </Layout>
);

Home.getInitialProps = () => {
  return {
    storyList: stories,
  };
};

export default Home;
