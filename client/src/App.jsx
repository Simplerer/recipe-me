import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
// import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css'
import Peruse from './pages/Peruse';
import API from './pages/API';
import Header from './components/Header';
import Login from './pages/login';
import Search from './components/Search';
import Recipe from './pages/Recipe';
import Home from './pages/Home';

function App() {

  const [onsite, setOnsite] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [holder, setHolder] = useState([])

  return (
    <main id='main'>
      <Router>
        {onsite &&
          <Header
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn} />
        }
        <Routes>
          <Route path='/'
            element={<Home
              onsite={onsite}
              setOnsite={setOnsite} />} />

          <Route
            path='/login'
            element={<Login
              setUser={setUser}
              setLoggedIn={setLoggedIn} />} />

          <Route
            path='/peruse'
            element={<Peruse
              user={user}
              loggedIn={loggedIn}
              data={data}
              isLoading={isLoading}
              holder={holder}
              setHolder={setHolder} />} />

          <Route
            path='/search'
            element={<Search
              isLoading={setIsLoading}
              setData={setData} />} />

          <Route
            path='/recipe'
            element={<Recipe />} />

          <Route path='/two' element={<API />} />
        </Routes>
      </Router>
    </main>
  )

}

export default App
