import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import './components.css';

function Header() {

  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)

  const openMenu = () => {
    setOpen(!open)
  }

  const logout = async () => {
    await axios.post('api/session/logout')
    .then((res)=> {
      console.log(res)
      setLoggedIn(false)
    })
  }

  useEffect(() => {

    axios.get('api/session/data')
      .then(({data})=> {
        setLoggedIn(data.loggedIn)
      })
    
  }, []);

  return (

    <section id="header">
      <div id="headerItems">
        <div id="mainItems">
          <div id="siteName">
            <h1>Recipe Me</h1>
          </div>
          <div id="menuDropdownIcon" onClick={openMenu}>
            {open
              ? <p id="openBtn">| - 0 - |</p>
              : <p id="closeBtn">| - - - |</p>
            }
          </div>
        </div>
        <div id="menuDropdown">
          <div className={open ? "openDropdown" : "closeDropdown"}>
            <ul id="menuDropdownList">
              {loggedIn 
              ? <li onClick={logout}>Logout</li>
              : <NavLink to='/login'><li>Login</li></NavLink>
              }
              <li>Profile</li>
              <li>Share</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )

};

export default Header;