import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import { ToDoList } from './pages/ToDoList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoList/>
  </StrictMode>,
)
