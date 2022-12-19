import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App
