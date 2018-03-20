import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'
import {connect} from 'react-redux' // 引入官方的

class Content extends Component {
  render () {
    return (
      <div>
        <p style={{color: this.props.color}}>this is content</p>
        <Switch />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

Content = connect(mapStateToProps)(Content)

export default Content