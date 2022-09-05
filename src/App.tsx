import React from 'react'

import './App.css'
import { HashRouter } from 'react-router-dom'
import Indexes from './routes'
import { ToastContainer } from 'react-toastify'

function App () {
  return (
    <HashRouter>
      <ToastContainer />
      <Indexes />
    </HashRouter>
  )
}

export default App
