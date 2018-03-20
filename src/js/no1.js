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

renderApp(appState)
appState.title.color = 'yellow'
renderApp(appState)