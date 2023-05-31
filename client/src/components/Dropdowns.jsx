// import './components.css';

function Dropdowns({ handleChange }) {
  return (
    <div id="dropdownBox">
      <select
        className='dropdowns'
        id="cuisine"
        name="cuisineType"
        onChange={handleChange}
      >
        <option value="">Cusine Type</option>
        <option value="American">American</option>
        <option value="Asian">Asian</option>
        <option value="British">British</option>
        <option value="Caribbean">Caribbean</option>
        <option value="Central Europe">Central Europe</option>
        <option value="Chinese">Chinese</option>
        <option value="Eastern Europe">Eastern Europe</option>
        <option value="French">French</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>
        <option value="Kosher">Kosher</option>
        <option value="Mediterranean">Mediterranean</option>
        <option value="Mexican">Mexican</option>
        <option value="Middle Eastern">Middle Eastern</option>
        <option value="Nordic">Nordic</option>
        <option value="South American">South American</option>
        <option value="South East Asian">South East Asian</option>
      </select>
      <select
        className='dropdowns'
        id="meal"
        name="mealType"
        onChange={handleChange}
      >
        <option value="">Meal Type</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
        <option value="Teatime">Teatime</option>
      </select>
    </div>
  )
}

export default Dropdowns;