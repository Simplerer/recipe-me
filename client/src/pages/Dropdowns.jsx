function Dropdowns({ handleChange }) {
  return (
    <>
      <label htmlFor="cuisine">Cuisine Type:</label>
      <select
        id="cuisine"
        name="cuisineType"
        onChange={handleChange}
      >
        <option value="">Cuisine</option>
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
      <label htmlFor="meal">Meal Type:</label>
      <select
        id="meal"
        name="mealType"
        onChange={handleChange}
      >
        <option value="">Meal</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
        <option value="Teatime">Teatime</option>
      </select>
    </>
  )
}

export default Dropdowns;