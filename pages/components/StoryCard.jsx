import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StoryCard = ({ story }) => {
  return (
    <Card>
      <Link
        as={`/story/${story.slug}`}
        href={`/storydetail?title=${story.slug}`}
      >
        <button type="button">
          <p>{story.title}</p>
          <p>{story.body}</p>
          <p>
            {story.meta.author}
            &nbsp;| &nbsp;
            {story.meta.publishedOn}
          </p>
        </button>
      </Link>
    </Card>
  );
};

const Card = styled.li`
  padding: 2rem;
  background-color: #000;
  color: white;
  border: 2px solid white;
  margin: 1rem;
  :hover {
    color: green;
    border: 2px solid green;
    border-radius: 10px;
  }
  button {
    cursor: pointer;
    color: inherit;
    font: inherit;
    text-decoration: none;
    border: none;
    outline: none;
    background: none;
  }
`;

export default StoryCard;
