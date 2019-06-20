import React, { Fragment } from 'react';
import styled from 'styled-components';

import { PageHead, Footer } from './meta';
import Nav from './Nav';
import Banner from './Banner';

const Layout = ({ children }) => (
  <Fragment>
    <PageHead />
    <StyledLayout>
      <Banner />
      <Nav />
    </StyledLayout>
    <Section>
      {children}
      <Footer />
    </Section>
  </Fragment>
);

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Section = styled.div`
  width: 99%;
  text-align: center;
  margin: auto;
`;

export default Layout;
