import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Bounce, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainers } from 'react-toastify'
import { Bounces } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={8000}
      hideProgressBar={false}
      pauseOnHover
      closeOnClick
      draggable
      theme="light"
      transition={Bounce}
    />

      autoCloses={5000}
      hideProgressBarr={false}
      closeOnClickk
      pauseOnHoverr
      draggablee
      theme="light"
      transitions={Bounce}
      />
  </React.StrictMode>,
)
