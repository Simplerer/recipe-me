import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
// import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css'
import { NewFetch } from './components/NewFetch';




function Fetch() {
  return (
    <>
      <h1>Hey!</h1>
      <h3>I am the outer fetch component!</h3>
      <NavLink to='/one'> 
      <button>Click it</button>
        </NavLink>
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
        </Routes>
      </Router>
    </>
  )

}

export default App
