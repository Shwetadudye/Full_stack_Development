import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { ContextTodo } from './Context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ContextTodo >
    <App />
  </ContextTodo >,
)
