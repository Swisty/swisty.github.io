import React from 'react'
import HomePage from '../Pages/HomePage/HomePage'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<HomePage />} />
         </Routes>
      </Router>

   )
}

export default App