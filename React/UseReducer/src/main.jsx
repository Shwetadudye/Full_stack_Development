
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { TodosContext } from './Context/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <TodosContext >
    <App />
  </TodosContext>
    
  </>,
)
