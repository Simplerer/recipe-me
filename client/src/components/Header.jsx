import { useState } from "react";
import './components.css';

function Header() {

  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open)
  }

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
              <li>Login</li>
              <li>Logout</li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )

};

export default Header;