import { useState } from "react";
import Dropdowns from "./Dropdowns";
import axios from 'axios';
import './components.css';
import { useNavigate } from "react-router-dom";


function Search({ setData }) {

  const navigate = useNavigate();
  const [search, setSearch] = useState({
    query: null,
    ingAmount: null,
    cuisineType: null,
    mealType: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post(`api/dish`, { ...search }).then((res) => {
      setData(res.data.data)
      setSearch({
        query: null,
        ingAmount: null,
        cuisineType: null,
        mealType: null
      })
      navigate('/peruse')
    })
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value })
  }

  return (
    <section id="search">
      <h1 className="sectionTitle">Retrieve Recipes</h1>
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            id="searchField"
            name="query"
            placeholder="Query"
            onChange={handleOnChange} />
            <button className="button"
              type="submit">Search</button>
          <div id="middleSearch">
            <input
              type="text"
              className="input"
              id="ingredientField"
              name="ingAmount"
              placeholder="# of Ingredients"
              onChange={handleOnChange} />
            <Dropdowns handleChange={handleOnChange} />
          </div>
          <h2 id="optional">Optionals</h2>
        </form>
      </div>
    </section>
  )
};

export default Search;