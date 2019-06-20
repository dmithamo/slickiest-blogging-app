import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { CopyrightOutlined } from '@material-ui/icons';

export const PageHead = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap"
        rel="stylesheet"
      />
      <title>Slick</title>
    </Head>
    <style jsx global>
      {`
        body {
          background-color: #000;
          color: white;
          margin: 0;
          padding: 0;
          width: 75%;
          margin: auto;
          font-size: 12px;
          font-family: 'Fira Mono', monospace;
        }
        * {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>
);

export const Footer = () => (
  <Copyright>
    A&nbsp;
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/dmithamo"
    >
      dmithamo
    </a>
    &nbsp;product&nbsp;|&nbsp;
    <CopyrightOutlined fontSize="inherit" />
    2019
  </Copyright>
);

const Copyright = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2px;
  right: 5px;
  border-radius: 30px;
  color: #333;
  :hover {
    color: green;
    border: 1px solid green;
  }
  padding: 1rem;
  p {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    :hover {
      color: white;
    }
  }
`;
