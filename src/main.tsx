import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToDoListPage } from './pages/ToDoListPage.tsx'
import './assets/css/normalize.css'
import './assets/css/style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoListPage/>
  </StrictMode>,
)
