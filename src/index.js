import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { add } from './math.js';

add(10, 30)
console.log(_.join(['a', 'b', 'c']))
class App extends Component {
  render () {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
// var root = document.getElementById('root');

// import './index.scss'

// // createAvatar();
// root.innerHTML = '<div class="icon iconfont iconkehuishou-buliaolei"></div>';
