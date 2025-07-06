import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from './Section/Homepage'
import Feature from './Section/Feature'

const Home = () => (
  <>
    <Homepage />
    <Feature />
  </>
)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App