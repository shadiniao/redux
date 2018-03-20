import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'

class Content extends Component {
  /** 3.与header中一样的重复代码 */
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
    /** 6. 与header中一样的重复代码*/
    const {store} = this.context
    store.subscribe(() => this._uptColor())
    /** 6. 与header中一样的重复代码*/
  }

  _uptColor() {
    const {store} = this.context
    const state = store.getState()
    this.setState({
        color: state.color
    })
  }
  /** 3.与header中一样的重复代码 */

  render () {
    return (
      <div>
        <p style={{color: this.state.color}}>this is content</p>
        <Switch />
      </div>
    )
  }
}

export default Content