import { useEffect, useState } from "react";
import axios from 'axios';

function API() {

  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  const [number, setNumber] = useState(0)

  useEffect(() => {
    axios.get('/api/user').then((res) => {
      console.log(res)
    })
  }, [])


  // console?.log(data)

  const makeUser = () => {
    axios.post('/api/user', {
      username: 'richard nixon',
      password: "boothtoooth"
    }).then((res) => console.log(res.status) )
  }

  const deleteUser = () => {
    axios.delete(`/api/user/${number}`).then((res) => {
      console.log(res)
    })
  }

  const seeUsers = () => {
    axios.get('/api/user')
    .then(res => {
      console.log(res)
    })
  }

  return (
    <>
      <h1>users : </h1>
      <button
      onClick={makeUser}>Make a User</button>
      <button
      onClick={deleteUser}>Delete a User</button>
      <button
      onClick={seeUsers}>See all Users, in console</button>
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '20px', margin: '20px auto'}}>
        <p onClick={() => setNumber(number - 1)}>-</p>
        <p>{number}</p>
        <p onClick={() => setNumber(number + 1)}>+</p>
      </div>
    </>
  )
}

export default API;

// https://vitejs.dev/config/server-options.html

// https://axios-http.com/docs/post_example