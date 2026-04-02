
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Provider } from 'react-redux'
import {myStore} from './App/Store.js'
import { Counter } from './Pages/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <App />
    <Counter />
  </Provider>,
)
