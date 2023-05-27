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
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
      <label className="label" htmlFor='se'>Password</label>
        <input
          type="text"
          id="searchField"
          name="query"
          onChange={handleOnChange} />
        <input
          type="text"
          id="ingredientField"
          name="ingAmount"
          onChange={handleOnChange} />
        <Dropdowns handleChange={handleOnChange} />
        <button
          type="submit"
          style={{ margin: '2%', backgroundColor: 'orange' }} >Search</button>
      </form>
    </div>
  )
};

export default Search;