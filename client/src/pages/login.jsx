import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './pages.css';



function Login({ setLoggedIn, setUser, userData }) {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [tryAgain, setTryAgain] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [passwordShort, setPasswordShort] = useState(false);
  const [errorCode, setErrorCode] = useState(null);

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

    } catch (err) {

      console.log(err);
      setErrorCode(err.response.data.message)
      setErrorMessage(true);

    }
  };

  const createUser = async () => {

    if (Object.values(formData).includes('')) {
      setTryAgain(true);
      return
    }

    if (formData.password.length < 8) {
      setPasswordShort(true)
      return
    }

    try {
      await axios.post('api/session/create', {
        ...formData
      })
        .then((res) => {
          setUser(res.data);
          console.log(userData)
          console.log(res.data)
          setLoggedIn(true);
          navigate('/search');
        })
    } catch (err) {

      console.error(err);
      setErrorCode(err.response.data.message)
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
  }

  const hiLabel = (e) => {
    if (e.target.value == '') {
      let box = e.target.closest('.inputBox').querySelector('.label');
      box.style.display = 'block';
    }
  }


  return (
    <section id="login">
      <h1 className="sectionTitle">Login</h1>
      <form onSubmit={handleSubmit} id="loginForm">
        <label className="label" htmlFor='username' hidden></label>
        <input
          type="text"
          name="username"
          className="input"
          placeholder="Username"
          onChange={handleChange}
          onFocus={byeLabel}
          value={formData.username} />
        <label className="label" htmlFor='password' hidden></label>
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          onFocus={byeLabel}
          value={formData.password} />
        <button
          id="loginBtn"
          className="button"
          type="submit">Login</button>
        <h2>If not Signed Up</h2>
        <button
          id="createBtn"
          className="button"
          type="button"
          onClick={createUser}>Create an Account</button>
      </form>
      {tryAgain &&
        <div className="errorMessage">
          <p className="errorMessage">Fill out all the fields please!</p>
          <p
            onClick={() => setTryAgain(false)}
            className="errorExit">| X |</p>
        </div>
      }
      {errorMessage &&
        <div className="errorMessage">
          <p className="errorMessage">{errorCode}</p>
          <p
            onClick={() => setErrorMessage(false)}
            className="errorExit">| X |</p>
        </div>
      }
      {passwordShort &&
        <div className="errorMessage">
          <p className="errorMessage">Password length 8 or more please!</p>
          <p
            onClick={() => setPasswordShort(false)}
            className="errorExit">| X |</p>
        </div>
      }
    </section>
  )
}

export default Login;