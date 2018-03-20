/**
 * 用户的数据包括三部分，姓名（username）、年龄（age）、性别（gender）
 */

/* 增加用户操作 */
dispatch({
  type: 'ADD_USER',
  user: {
    username: 'Lucy',
    age: 12,
    gender: 'female'
  }
})

/* 通过 id 删除用户操作 */
dispatch({
  type: 'DELETE_USER',
  index: 0 // 删除特定下标用户
})

/* 修改用户操作 */
dispatch({
  type: 'UPDATE_USER',
  index: 0,
  user: {
    username: 'Tomy',
    age: 12,
    gender: 'male'
  }
})

const userReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_USER':
      const users = [...state.users]
      users.push(actions.user)
      return users
    case 'UPDATE_USER':
      const users = [...state]
      const user = {...users[action.index],...action.user}
      users[state.index] = user
      return users
    case 'DELETE_USER':
      return [...state.slice(0,action.index),...state.slice(action.index+1)]
    default:
      return state
  }
}

class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button>删除</button>
      </div>
    )
  }
}

const mapDispatchToProps = (state) => {
  return {
    
  }
}

class UsersList extends Component {
  render () {
    return (
      <div>
        {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
        <div className='add-user'>
          <div>Username: <input type='text' /></div>
          <div>Age: <input type='number' /></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' /></label>
            <label>Female: <input type='radio' name='gender' value='female' /></label>
          </div>
          <button>增加</button>
        </div>
        {/* 显示用户列表 */}
        <div className='users-list'>{/* TODO */}</div>
      </div>
    )
  }
}