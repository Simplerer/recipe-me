import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './pages.css';



function Login({ setLoggedIn, setUser }) {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [tryAgain, setTryAgain] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const login = async () => {

    if (Object.values(formData).includes('')) {
      setTryAgain(true);
      return
    }

    try {
      const { data } = await axios.post('api/session/login', {
        ...formData
      })

      const { user } = data
      setUser(user);
      setLoggedIn(true);
      navigate('/search');
    } catch {
      setErrorMessage(true);
    }
  };

  const createUser = async () => {

    if (Object.values(formData).includes('')) {
      setTryAgain(true);
      return
    }

    if (formData.password.length < 8) {
      setErrorMessage(true)
      return
    }

    try {
      await axios.post('api/session/create', {
        ...formData
      })
        .then((res) => {
          console.log(res);
          setUser(user);
          setLoggedIn(true);
          navigate('/search');
        })
    } catch {
      setErrorMessage(true);
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
  }

  const byeLabel = (e) => {
    setTryAgain(false);
    setErrorMessage(false);
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
    <h1 className="sectionTitle">Login</h1>
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
      {tryAgain && 
      <div id="errorMessage">
        <p 
        onClick={() => setTryAgain(false)}
        id="errorExit">| X |</p>
        <p id="errorMessage">Fill out all the fields please!</p>
        </div>
        }
      {errorMessage && 
      <div id="errorMessage">
        <p 
        onClick={() => setErrorMessage(false)}
        id="errorExit">| X |</p>
        <p>There seems to have been a problem</p>
        </div>
        }
    </>
  )
}

export default Login;