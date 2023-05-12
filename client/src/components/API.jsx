import { useEffect } from "react";
import axios from 'axios';

function API() {

  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

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

  return (
    <>
      <h1>users : </h1>
      <button
      onClick={makeUser}>Make a User</button>
    </>
  )
}

export default API;

// https://vitejs.dev/config/server-options.html

// https://axios-http.com/docs/post_example