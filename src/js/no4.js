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

function renderTitle (title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent (content) {
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

export default function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

// 强化store, 改变值后, 自动调用render
function createStore(state, uptState) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    uptState(state, action)
    listeners.forEach((listener) => listener())
  }
  return {getState, dispatch, subscribe}
}

function uptState (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      break
    default:
      break
  }
}

const store = createStore(appState, uptState)
store.subscribe(() => renderApp(store.getState()))

renderApp(store.getState())
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: 'hello1'})
