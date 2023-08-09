import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ContactList from './components/ContactList'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar d-flex bg-body-tertiary">
          <ul>
            <li>
              <div className="leftContainer">
                {' '}
                <Link
                  style={{ textDecoration: 'none', fontWeight: '600' }}
                  to="/"
                >
                  Home
                </Link>{' '}
                <Link
                  style={{ textDecoration: 'none', fontWeight: '600' }}
                  to="/contacts"
                >
                  Contacts
                </Link>
              </div>
            </li>
            <li>
              <SearchBar />
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/" />
        </Routes>
      </div>
    </Router>
  )
}

export default App
