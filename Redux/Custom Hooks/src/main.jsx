
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { FetchApp } from './FetchApp.jsx'
import { LocalStorageApp } from './LocalStorageApp.jsx'

createRoot(document.getElementById('root')).render(
  <>
   {/*<FetchApp />*/ }  
   <LocalStorageApp />
  </>,
)
