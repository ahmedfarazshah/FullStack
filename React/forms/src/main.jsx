import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App.jsx'
// import App from './components/basics.jsx'
import App from './components/complexState.jsx'
// import App from './components/complexstateSpreadO.jsx'
// import App from './components/updatearrayinState.jsx'
// import App from './components/arrayofObjects.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
