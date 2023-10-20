import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './components.css';

function Header({ loggedIn, setLoggedIn }) {

  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open)
  }

  const logout = async () => {
    await axios.post('api/session/logout')
      .then((res) => {
        console.log(res)
        setLoggedIn(false)
        navigate('/login')
      })
  }

  return (

    <section id="header">
      <div id="headerItems">
        <div id="mainItems">
          <div id="siteName">
            <NavLink to='/'>
              <h1>Recipe Me</h1>
            </NavLink>
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
                ?
                <>
                  <li onClick={logout}>Logout</li>
                  <NavLink to='/profile'>
                    <li>Profile</li>
                  </NavLink>
                  <NavLink to='/search'>
                    <li>Just Search</li>
                  </NavLink>
                </>
                :
                <>
                  <NavLink to='/login'>
                    <li>Login</li>
                  </NavLink>
                  <NavLink to='/search'>
                    <li>Just Search</li>
                  </NavLink>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>

  )

};

export default Header;