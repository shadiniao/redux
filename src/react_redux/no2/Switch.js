import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Switch extends Component {
  /** 4.点击按钮调用context中store的dispatch方法,改变颜色 */
  static contextTypes = {
    store: PropTypes.object
  }

  _switchColor(color) {
    const {store} = this.context
    store.dispatch({
      type: 'UPDATE_COLOR',
      color: color
    })
  }
  /** 4.点击按钮调用context中store的dispatch方法,改变颜色 */

  render () {
    return (
      <div>
        <button onClick={this._switchColor.bind(this, 'red')}>Red</button>
        <button onClick={this._switchColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}

export default Switch