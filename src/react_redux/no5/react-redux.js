import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 1.增加mapDispatchToProps参数
export const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
    class Decorator extends Component {
      static contextTypes = {
        store: PropTypes.object
      }

      componentWillMount() {
        this._upt()
        const {store} = this.context
        store.subscribe(() => this._upt())
      }

      _upt() {
        const {store} = this.context
        const props = mapStateToProps ? mapStateToProps(store.getState()) : {}
        // 2.将要调用的方法也放入state中
        const dispatch = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
        this.setState({
          reduxProps: {
            ...props,
            ...dispatch
          }
        })

      }

      render() {
        return <Component {...this.state.reduxProps} />
      }
    }

    return Decorator
}