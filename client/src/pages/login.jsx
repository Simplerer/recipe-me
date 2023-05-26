import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './pages.css';



function Login({ setLoggedIn, setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const login = async () => {
    try {
      const { data } = await axios.post('api/session/login', {
        ...formData
      })

      const { user } = data
      setUser(user)
      setLoggedIn(true)
      navigate('/one')
    } catch {
      res.error('problem logging in')
    }
  };

  const createUser = async () => {
    try {
      await axios.post('api/session/create', {
        ...formData
      })
        .then((res) => {
          console.log(res)
          setUser(user)
          setLoggedIn(true)
          navigate('/one')
        })
    } catch {
      res.error('problem creating a User!')
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(formData)
    console.log('Success!')
  }

  const byeLabel = (e) => {
    let box = e.target.closest('.inputBox').querySelector('.label');
    box.style.display = 'none';
  }

  const hiLabel = (e) => {
    if (e.target.value == '') {
      let box = e.target.closest('.inputBox').querySelector('.label');
      box.style.display = 'block';
    }
  }


  return (
    <>
    <h1 id="loginTitle">Login</h1>
      <section id="login">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <label className="label" htmlFor='username'>Username</label>
              <input
                type="text"
                name="username"
                className="input"
                onChange={handleChange}
                onFocus={byeLabel}
                onBlur={hiLabel}
                value={formData.username} />
            </div>
            <div className="inputBox">
              <label className="label" htmlFor='password'>Password</label>
              <input
                type="password"
                className="input"
                name="password"
                onChange={handleChange}
                onFocus={byeLabel}
                onBlur={hiLabel}
                value={formData.password} />
            </div>
            <div id="btnBox">
              <button
                id="loginBtn"
                type="submit">Login</button>
              <h2>If not Signed Up</h2>
              <button
                id="createBtn"
                type="button"
                onClick={createUser}>Create an Account</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login;