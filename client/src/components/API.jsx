import { useEffect } from "react";
import axios from 'axios';

function API() {

  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3001/api/user').then((res) => {
      console.log(res)
    })
  }, [])


  // console?.log(data)

  const makeUser = () => {
    axios.post('http://localhost:3001/api/user', {
      username: 'hanky',
      password: "panky1234"
    }).then((res) => console.log(res.status) )
  }

  return (
    <>
      <h1>users : </h1>
      <button
      onClick={makeUser}>Make a User</button>
    </>
  )
}

export default API;