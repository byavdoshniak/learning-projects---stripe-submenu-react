import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProvideContext } from './context'
ReactDOM.render(
  <React.StrictMode>
    <ProvideContext>
      <App />
    </ProvideContext>
  </React.StrictMode>,
  document.getElementById('root')
)
