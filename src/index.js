// import React, { Component } from 'react';
// import ReactDom from 'react-dom';
// import { add } from './math.js';
// import _ from 'lodash';
// import test from './test.js';

// console.log(test.name)

// add(10, 30)
// console.log(_.join(['a', 'b', 'c'], '###'))
// class App extends Component {
//   render () {
//     return (
//       <div>
//         Hello World
//       </div>
//     );
//   }
// }

// ReactDom.render(<App />, document.querySelector('#root'))
// var root = document.getElementById('root');

// import './index.scss'

// // createAvatar();
// root.innerHTML = '<div class="icon iconfont iconkehuishou-buliaolei"></div>';

// function getComponent () {
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['daisy', 'feng'], '-');
//     return element;
//   })
// }

async function getComponent () {
  const { default: _ } = await import(/* webpackChunkName:"lodash" */ 'lodash');
  const element = document.createElement('div');
  element.innerHTML = _.join(['daisy', 'feng'], '-');
  return element;
}

document.addEventListener('click', () => {
  getComponent().then(ele => {
    document.body.appendChild(ele)
  })
})

