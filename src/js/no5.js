const appState = {
  title: {
    text: 'this is title',
    color: 'red',
  },
  content: {
    text: 'this is content',
    color: 'blue'
  }
}

function renderTitle (title, prevTitle = {}) {
  if (title === prevTitle) {
    return
  }
  console.log('render title')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent (content, prevContent = {}) {
  if (content === prevContent) {
    return
  }
  console.log('render content')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

export default function renderApp (appState, prevState = {}) {
  if (appState === prevState) {
    return
  }
  renderTitle(appState.title, prevState.title)
  renderContent(appState.content, prevState.content)
}

function createStore(state, uptState) {
  const listeners = []
  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const getState = () => state
  
  const dispatch = (action) => {
    state = uptState(state, action)
    listeners.forEach((listener) => listener())
  }
  return {getState, dispatch, subscribe}
}

// 优化性能,改变title的值,不会使content重新渲染,改变值后,返回新的对象
function uptState (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}

const store = createStore(appState, uptState)
// 用一个全局变量,保存老的值
let oldState = store.getState()
store.subscribe(() => {
  // 改变值后,记录新值
  let newState = store.getState()
  // 传入新值和老值
  renderApp(newState, oldState)
  oldState = newState
})

renderApp(store.getState())
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: 'hello'})
