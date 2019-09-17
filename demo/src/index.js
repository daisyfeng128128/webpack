import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './js/home.js';
import List from './js/list.js';


class App extends Component {
  componentDidMount () {
    axios.get('/react/api/header.json').then(res => {
      console.log(res)
    })
  }
  render () {
    return (
      <BrowserRouter>
        <Route path='/' component={Home} />
        <Route path='/list' component={List} />
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#root'))