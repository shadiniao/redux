import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  /** 2.读取父组件上下文中的store,取得颜色变量 */
  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
        color: ''
    }
  }

  componentWillMount() {
    this._uptColor()
    /** 5. 增加订阅,当改变context后,将会调用部分*/
    const {store} = this.context
    store.subscribe(() => this._uptColor())
    /** 5. 增加订阅,当改变context后,将会调用部分*/
  }

  _uptColor() {
    const {store} = this.context
    const state = store.getState()
    this.setState({
        color: state.color
    })
  }
  /** 2.读取父组件上下文中的store,取得颜色变量 */

  render () {
    return (
      <h1 style={{color:this.state.color}}>this is header</h1>
    )
  }
}

export default Header