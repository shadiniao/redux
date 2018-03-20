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

// 添加dispatch,通过该方法来修改全局变量
function dispatch (action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color
      break
    default:
      break
  }
}

renderApp(appState)
dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is gray' })
dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'gray' })
renderApp(appState)