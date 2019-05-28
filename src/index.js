import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

// My components
import Main from './components/_Main';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/home' exact component={Main} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
