import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ListAltOutlined } from '@material-ui/icons';

const ListOfStories = ({ listOfStories }) => (
  <StyledListContainer>
    <StyledHeader>
      <ListAltOutlined fontSize='inherit' />
      <p>Top Stories</p>
    </StyledHeader>

    {listOfStories.map((story) => {
      return (
        <StyledStory
          key={story.title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace('.', '')}
        >
          <StyledLink
            to={`/story-list/${story.title
              .toLowerCase()
              .replace(/ /g, '-')
              .replace('.', '')}`}
          >
            {story.title}
          </StyledLink>
          <p>{story.publishedOn}</p>
        </StyledStory>
      );
    })}
  </StyledListContainer>
);

export const Details = ({ story }) => {
  return (
    <StyledDetailsContainer>
      <h4>{story.title}</h4>
      <p>{story.description}</p>
      <p>{story.publishedOn}</p>
    </StyledDetailsContainer>
  );
};

const StyledHeader = styled.header`
  font-size: 32px;
  font-weight: bold;
  text-align: start;
  padding: 2rem 1.2rem;
  color: #fff;
  p {
    margin: 0;
    font-size: 18px;
  }
`;

const StyledListContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const StyledStory = styled.div`
  padding: 1.2rem;
  text-align: start;
  margin-bottom: 4px;
  font-size: 14px;
  p {
    color: #333;
    font-size: 12px;
  }
  :hover,
  :active,
  :focus {
    font-weight: bold;
    color: green;
    p {
      color: #ffffff8a;
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  :hover,
  :active,
  :focus {
    font-weight: bold;
    color: green;
    p {
      color: #ffffff8a;
    }
  }
`;

export const StyledDetailsContainer = styled.div`
  h4 {
    color: green;
    font-size: 24px;
    margin-bottom: -0.4rem;
  }
  p {
    color: #333;
    font-size: 12px;
    padding-left: 1rem;
  }
  p:first-of-type {
    color: #ffffff8a;
    font-size: 12px;
  }
  border-radius: 5%;
  height: 80vh;
  padding: 0 2rem;
  margin: 2rem 5rem 0;
`;
export default ListOfStories;
