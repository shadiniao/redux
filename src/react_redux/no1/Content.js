import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'

class Content extends Component {
  render () {
    return (
      <div>
        <p>this is content</p>
        <Switch />
      </div>
    )
  }
}

export default Content