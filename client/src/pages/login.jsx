import { useState } from "react";
import { redirect } from "react-router-dom"; 
import axios from 'axios';



function Login() {

  // const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({username: '', password: ''});

  const login = async () => {
    await axios.post('api/session/login', {
      ...formData
    })
    .then(({data}) => {
      console.log(data.user)

      return redirect('/')
    })
  };

  const createUser = async () => {

    console.log(formData)
    await axios.post('api/session/create', {
      ...formData
    })
    .then((res) => {
      console.log(res)

      return redirect('/')
    })
  };

  const handleChange = (event) => {
    console.log(event)
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  };

  const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        await login(formData)
      } catch {
        console.error(error)
      }
  }


  return (
    <section id="Login">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input 
            type="text"  
            placeholder="useruser"
            name="username" 
            onChange={handleChange} 
            value={formData.username}/>
            <label htmlFor='password'>Password</label>
            <input 
            type="password"
            placeholder="********" 
            name="password" 
            onChange={handleChange} 
            value={formData.password}/>
          </div>
          <div>
            <button 
            className="formBtn" 
            id="createBtn" 
            type="button"
            onClick={createUser}>Create an Account</button>
            <button 
            className="formBtn" 
            id="loginBtn" 
            type="submit">Login</button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Login;