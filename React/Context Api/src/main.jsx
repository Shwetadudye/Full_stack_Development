
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { ContextCounter} from "./Context/ContextProvider.jsx"

createRoot(document.getElementById('root')).render(
  <ContextCounter>
    <App />
  </ContextCounter>,
)
