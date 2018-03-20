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

// 添加store, 将state和dispatch统一到一起
function createStore(state, uptState) {
  const getState = () => state
  const dispatch = (action) => uptState(state, action)
  return {getState, dispatch}
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
store = {getState: getState(), dispatch: dispatch()}
renderApp(store.getState())
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: 'hello'})
renderApp(store.getState())