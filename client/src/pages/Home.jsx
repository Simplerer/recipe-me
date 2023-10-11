import { NavLink } from "react-router-dom";

function Home() {

  return (
    <section id="homebase">
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
      <div id="homeBackground">R<span>m</span></div>
      <div id="homeButtons">
        <NavLink to='/login'>
          <button id="homeLogin" className="button">Login</button>
        </NavLink>
        <NavLink to='/search'>
          <button id="homeSearch" className="button">Just Search</button>
        </NavLink>
      </div>
    </section>
  )
}

export default Home;

// redid the css here are some notes

// - main is now under the header and around the pages
// - move grid to main and take off absolute off of allllll the items!
// - box sahadow that I love has been coming from the empty pages with the absolute items on top,
//        find how to get same effect with items relatively placed
// - overflow issues may be from the odd  positioning