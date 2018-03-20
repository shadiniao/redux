// 增加provider,优化index中的代码

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import { Provider } from './react-redux'

function createStore(reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const getState = () => state
  
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  dispatch({})
  return {getState, dispatch, subscribe}
}

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