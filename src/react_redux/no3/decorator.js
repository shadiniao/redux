import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (Component) => {
    class Decorator extends Component {
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
        const {store} = this.context
        store.subscribe(() => this._uptColor())
      }

      _uptColor() {
        const {store} = this.context
        const state = store.getState()
        this.setState({
            color: state.color
        })
      }

      render() {
        return <Component />
      }
    }

    return Decorator
}