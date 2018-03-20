import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from './react-redux'

class Switch extends Component {
  _switchColor(color) {
    if (this.props._switchColor) {
      this.props._switchColor(color)
    }
  }

  render () {
    return (
      <div>
        <button onClick={this._switchColor.bind(this, 'red')}>Red</button>
        <button onClick={this._switchColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}

// 3.增加mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    _switchColor: (color) => {
      dispatch({
        type: 'UPDATE_COLOR',
        color: color
      })
    }
  }
}

Switch = connect(null, mapDispatchToProps)(Switch)

export default Switch