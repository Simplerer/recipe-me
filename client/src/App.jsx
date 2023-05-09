import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
// import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css'
import NewFetch from './components/NewFetch';
import API from './components/API';



function Fetch() {
  useEffect(() => {
    // axios.get('http://localhost:3001/axios/dish/abf78d5552e83878f5badbc935bfa567').then((res) => {
    //     console.log(res)
    //   })

    console.log('This is the useEffect that searches for one recipe using an ID')

  }, [])
  return (
    <>
      <h1>Hey!</h1>
      <div>
        <h3>I am the recipe fetch!</h3>
        <NavLink to='/one'>
          <button>Click it</button>
        </NavLink>
      </div>
      <div>
        <h3>I am the api fetch!</h3>
        <NavLink to='/two'>
          <button>Click it</button>
        </NavLink>
      </div>
    </>
  )

}

function App() {
  return (
    <>
      <Router>
        <Fetch />
        <Routes>
          <Route path='/one' element={<NewFetch />} />
          <Route path='/two' element={<API />} />
        </Routes>
      </Router>
    </>
  )

}

export default App
