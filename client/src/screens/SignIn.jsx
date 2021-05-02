import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './SignIn.css'

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleSignIn } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='form-container'>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSignIn(formData)
      }}>
        <div className="input-container">
          <label>
            Username:
            <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <br/>
          <button>Sign In</button>
          <br/>
          <Link to='/SignUp'>Welcome! SignUp to create and account!</Link>
        </div>
      </form>
    </div>
  )
}
