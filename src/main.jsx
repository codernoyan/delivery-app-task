import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RenderProvider from './contexts/RenderProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RenderProvider>
      <App />
    </RenderProvider>
  </React.StrictMode>,
)
