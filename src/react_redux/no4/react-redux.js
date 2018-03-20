import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps) => (Component) => {
    class Decorator extends Component {
      static contextTypes = {
        store: PropTypes.object
      }

      /** 1. 增加订阅,触发state改变 */
      componentWillMount() {
        this._upt()
        const {store} = this.context
        store.subscribe(() => this._upt())
      }

      _upt() {
        const {store} = this.context
        const props = mapStateToProps(store.getState())
        this.setState({
          reduxProps: {
            ...props
          }
        })

      }

      render() {
        return <Component {...this.state.reduxProps} />
      }
    }

    return Decorator
}