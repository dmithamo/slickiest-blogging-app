import React, { Fragment } from 'react';
import styled from 'styled-components';

import StoryCard from './StoryCard';

const StoryListContainer = ({ storyList }) => {
  return (
    <Fragment>
      <StyledListContainer>
        <h3>Top stories</h3>
        <ul>
          {storyList.map((story) => (
            <StoryCard key={story.title.toLowerCase()} story={story} />
          ))}
        </ul>
      </StyledListContainer>
    </Fragment>
  );
};

const StyledListContainer = styled.div`
  h3 {
    margin: 0;
    padding: 1rem;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export default StoryListContainer;
