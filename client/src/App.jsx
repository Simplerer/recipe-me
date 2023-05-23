import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
// import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css'
import NewFetch from './pages/NewFetch';
import API from './pages/API';
import axios from 'axios';
import Header from './components/Header';
import Login from './pages/login';



function Fetch() {

  // const [user, setUser] = useState(null)

  // const login = async () => {
  //   await axios.post('api/session/login', {username: "Richard Nixon",
  //   password: "12345678pop"})
  //   .then((res) => {
  //     let  person  = res.data.user
  //     console.log(person)
  //     console.log(res)
  //     setUser(person)
  //   })
  // }

  // const logout = async () => {
  //   await axios.post('api/session/logout')
  //   .then((res)=> {
  //     console.log(res)
  //   })
  // }

  // const stupid = async () => {
  //   await axios.get('api/session/data')
  //   .then((res)=> {
  //     console.log(res)
  //   })
  // }

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
      <div>
        {/* <button onClick={login}>login thata user</button> */}
        {/* <button onClick={logout}>logout</button> */}
        {/* <button onClick={stupid}>check the console</button> */}
      </div>
      {/* {user && 
      <h1>{user.username}</h1>
      } */}
    </>
  )

}

function App() {
  return (
    <main id='main'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Fetch />} />
          <Route path='/login' element={<Login />} />
          <Route path='/one' element={<NewFetch />} />
          <Route path='/two' element={<API />} />
        </Routes>
      </Router>
    </main>
  )

}

export default App
