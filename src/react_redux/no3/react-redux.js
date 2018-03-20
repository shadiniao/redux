import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps) => (Component) => {
    class Decorator extends Component {
      // 1.将context相关代码放入包装类中
      static contextTypes = {
        store: PropTypes.object
      }

      render() {
        const {store} = this.context
        const props = mapStateToProps(store.getState())

        // 2.将store.state中的数据转换为props传回组件
        return <Component {...props} />
      }
    }

    return Decorator
}