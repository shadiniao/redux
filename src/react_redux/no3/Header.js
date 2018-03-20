import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import {connect} from './decorator'
import {connect} from './react-redux'

// 3.去除高耦合性代码
class Header extends Component {
  render () {
    return (
      <h1 style={{color:this.props.color}}>this is header</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

Header = connect(mapStateToProps)(Header)

export default Header