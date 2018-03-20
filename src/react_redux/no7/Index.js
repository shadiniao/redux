// 使用官方react_redux

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import {createStore} from 'redux' // 1.引入createStore,Provider,删除自己的
import { Provider } from 'react-redux'

function reducer (state, action) {
  if (!state) {
    return {
      color: 'red'      
    }
  }
  switch (action.type) {
    case 'UPDATE_COLOR':
      return {
        ...state,
        color: action.color
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default class Index extends Component {
  // 4.删除context相关代码,将Provider作为最上层
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)