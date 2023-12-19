import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import Context_01Provider from './contexts/Context_01/Context_01.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context_01Provider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Context_01Provider>
  ,
)
