// 通过context方式来设置颜色

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'

// 1.将之前的createStore和reducer方法拷贝过来
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
// 1.将之前的createStore和reducer方法拷贝过来

export default class Index extends Component {
  /** 2.将store保存到context中 */
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: store
    }
  }
  /** 2.将store保存到context中 */

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
  <Index />,
  document.getElementById('root')
)