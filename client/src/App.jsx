import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
// import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css'
import NewFetch from './pages/NewFetch';
import API from './pages/API';
import Header from './components/Header';
import Login from './pages/login';

function App() {


  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  return (
    <main id='main'>
      <Router>
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path='/' />
          <Route
            path='/login'
            element={<Login
              setUser={setUser}
              setLoggedIn={setLoggedIn} />} />
          <Route
            path='/peruse'
            element={<NewFetch
              user={user}
              loggedIn={loggedIn} />} />
          <Route path='/two' element={<API />} />
        </Routes>
      </Router>
    </main>
  )

}

export default App
