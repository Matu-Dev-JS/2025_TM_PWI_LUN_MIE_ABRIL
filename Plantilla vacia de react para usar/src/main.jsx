import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

let div_root = document.getElementById('root')
createRoot(div_root).render(
  <App />
)
