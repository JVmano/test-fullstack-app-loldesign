import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages used in the project
import Home from '../pages/Home'

const Indexes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Indexes
