import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
// import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css'
import Peruse from './pages/Peruse';
import Header from './components/Header';
import Login from './pages/Login';
import Search from './components/Search';
import Recipe from './pages/Recipe';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Profile from './pages/Profile';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [recipe, setRecipe] = useState([]);

  return (
    <Router>

      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn} />

      <main id='main'>
        <Routes>

          <Route path='/'
            element={<Home />} />

          <Route path='/admin'
            element={<Admin />} />

          <Route
            path='/login'
            element={
              <Login
                setUser={setUser}
                setLoggedIn={setLoggedIn}
                userData={user} />} />

          <Route
            path='/peruse'
            element={
              <Peruse
                user={user}
                loggedIn={loggedIn}
                data={data}
                setRecipe={setRecipe}
                recipe={recipe} />} />

          <Route
            path='/search'
            element={
              <Search
                setData={setData} />} />

          <Route
            path='/recipe'
            element={
              <Recipe
                recipe={recipe}
                loggedIn={loggedIn}
                user={user} />} />

          <Route
            path='/profile'
            element={
              <Profile
                user={user}
                setRecipe={setRecipe} />} />

        </Routes>
      </main>
    </Router>
  )

}

export default App
