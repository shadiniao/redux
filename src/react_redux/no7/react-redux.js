import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

// 1.增加Provider,Provider将作为最上层的组件,所以旗下的组件便可以使用context了
export class Provider extends Component {
  /** 2.将Index这段代码拷贝过来 */
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }
  /** 2.将Index这段代码拷贝过来 */

  // 3.Provider包装所有组件
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}