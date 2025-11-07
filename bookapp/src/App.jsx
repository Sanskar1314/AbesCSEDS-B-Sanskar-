import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Book from './components/Book'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <div className="books-container">
              <Book Title="The Alchemist" Price={299} />
              <Book Title="Rich Dad Poor Dad" Price={399} />
              <Book Title="Atomic Habits" Price={499} />
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App