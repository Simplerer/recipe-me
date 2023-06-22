import { NavLink } from "react-router-dom";

function Home({ onsite, setOnsite }) {

  function welcome () {
    setOnsite(!onsite)
  }

  return (
    <section id="homebase">
        <div id="homeBackground">R<span>m</span></div>
      <div id="homeRecipe">
        <h1>
          <span>R</span>
          <span>e</span>
          <span>c</span>
          <span>i</span>
          <span>p</span>
          <span>e</span>
          <span>&nbsp;M</span>
          <span>e</span>
        </h1>
      </div>
      <NavLink to='/login'>
        <button id="homeLogin" onClick={welcome}>Login</button>
      </NavLink>
      <NavLink to='/search'>
        <button id="homeSearch" onClick={welcome}>Just Search</button>
      </NavLink>
    </section>
  )
}

export default Home;