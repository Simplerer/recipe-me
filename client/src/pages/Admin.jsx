import { useEffect, useState } from "react";
import axios from 'axios';

function Admin() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    await axios.get('api/user')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);

        console.log(data)

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }

  const deleteUser = async (userId) => {

    console.log('\n \n HEY!!!!! HIT THE DELETE   \n\n\n')

    try {
      await axios.delete(`api/user/${userId}`)
      console.log('Success!')
      getUsers()
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUsers()
  }, []);

  if (isLoading) {
    return (
      <h2>..Loading</h2>
    )
  } else {
    return (
      <section>
        <h2>Check the console!</h2>
        <button 
              onClick={() => getUsers()}
              style={{display: 'flex', justifyContent: 'center', 
              alignItems: 'center', padding: '20px', 
              backgroundColor: 'grey', color: 'red', fontSize: '30px'
              , margin: '20px auto'}}>Search All Users</button>
        <div>
          {data.map((el, index) => (

            <div key={index} style={{display: 'flex', justifyContent: 'center', 
            alignItems: 'center', padding: '20px', 
            border: 'solid 2px orange', fontSize: '30px'}}>
              <p>{el.username}</p>
              <button 
              onClick={() => deleteUser(el.id)}
              style={{display: 'flex', justifyContent: 'center', 
              alignItems: 'center', padding: '20px', backgroundColor: 'grey', color: 'red', fontSize: '30px'}}>Delete this Guy!!!</button>
            </div>
          ))}
        </div>
      </section>
    )
  }

}
export default Admin; 