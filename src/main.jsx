import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './components/App/index.jsx'
import App2 from './components/App/App.2.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
