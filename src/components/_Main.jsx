import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

// My components
import ListOfStories from './ListOfStories';
import Copyright from './Copyright';
import { Details } from './ListOfStories';
import Nav from './Nav';

// listOfstoriess
import { listOfStories, navLinks } from '../constants';

const Main = () => (
  <Fragment>
    <Container>
      <Nav navLinks={navLinks} />
      <ListOfStories listOfStories={listOfStories} />
      <div>
        {[...listOfStories, ...navLinks].map((item) =>
          item.title ? (
            <Route
              key={item.title.toLowerCase().replace(/ /g, '-')}
              exact
              path={`/story-list/${item.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace('.', '')}`}
              render={() => <Details story={item} />}
            />
          ) : (
            <Route
              key={item.to}
              exact
              path={item.to}
              component={item.component}
            />
          ),
        )}
      </div>
    </Container>
    <Route
      children={() => (
        <div>
          <Copyright />{' '}
        </div>
      )}
    />
  </Fragment>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 8fr;
`;

export default Main;
