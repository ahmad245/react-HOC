import React from 'react';

import { Provider } from 'react-redux';
import { stroe } from '../state';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Router, BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';


function App() {
 
  return (
    <Provider store={stroe} >

      <div className="App">
        <BrowserRouter>
         <Header />
          <Route path="/" exact component={CommentList} />
          <Route path="/edit" component={CommentBox} />

        </BrowserRouter>

      </div>
    </Provider>

  );
}

export default App;
