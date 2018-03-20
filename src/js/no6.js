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

function createStore(reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const getState = () => state
  
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  dispatch({})
  return {getState, dispatch, subscribe}
}

// 继续优化,将初始化和改变值统一成一个reducer
function reducer (state, action) {
  if (!state) {
    return {
      title: {
        text: 'this is title',
        color: 'red',
      },
      content: {
        text: 'this is content',
        color: 'blue'
      }
    }
  }
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

const store = createStore(reducer)
let oldState = store.getState()
store.subscribe(() => {
  let newState = store.getState()
  renderApp(newState, oldState)
  oldState = newState
})

renderApp(store.getState())
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: 'hello'})
