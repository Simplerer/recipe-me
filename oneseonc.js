import React, { useState, useEffect } from 'react';

function YourComponent() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data from API and update the state
    fetchData();
  }, []);

  const fetchData = () => {
    // Make the API call and update the 'data' state with the array of objects
    // This can be done using 'fetch' or any other suitable method
    // Example:
    fetch('YOUR_API_URL')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      {/* Display the current object */}
      {data.length > 0 && (
        <div>
          <h1>{data[currentIndex].title}</h1>
          <p>{data[currentIndex].description}</p>
        </div>
      )}

      {/* Button to move to the next object */}
      {data.length > 0 && currentIndex < data.length - 1 && (
        <button onClick={() => setCurrentIndex(currentIndex + 1)}>
          Next
        </button>
      )}
    </div>
  );
}

export default YourComponent;
