import { useState } from "react";
import Dropdowns from "./Dropdowns";
import axios from 'axios';
import './components.css';


function Search({ setData, isLoading }) {

  const [search, setSearch] = useState({
    query: null,
    ingAmount: null,
    cuisineType: null,
    mealType: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    isLoading(true)

    axios.post(`api/dish`, { ...search }).then((res) => {
      setData(res.data.data)
      isLoading(false)
      setSearch({
        query: null,
        ingAmount: null,
        cuisineType: null,
        mealType: null
      })
    })
  }
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value })
  }

  return (
    <>
      <h1 className="sectionTitle">Search</h1>
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            id="searchField"
            name="query"
            placeholder="Recipe Query"
            onChange={handleOnChange} />
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
          <button
            type="submit">Search</button>
        </form>
      </div>
    </>
  )
};

export default Search;