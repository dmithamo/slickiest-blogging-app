import React from 'react';
import { withRouter } from 'next/router';
import Layout from './components/Layout';
import stories from './helpers/constants';

const StoryDetail = withRouter((props) => (
  <Layout>
    <p>{props.story.title}</p>
    <p>{props.story.body}</p>
  </Layout>
));

StoryDetail.getInitialProps = (context) => {
  const { title } = context.query;
  const initialProps = {
    story: stories.filter((story) => story.slug === title)[0],
  };
  return initialProps;
};
export default StoryDetail;
