import React, { useState } from 'react';
import './SignUp.css'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { username, email, password} = formData;
  const { handleSignUp } = props;
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
        handleSignUp(formData)
      }}>
        <div className="input-container"></div>
        <h3 className="signup-welcome">Welcome! If you already have an account Sign In.</h3>
        <div className='inner-input'>
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
          Email:
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <br/>
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
        <button>Sign Up</button>
        </div>
      </form>
    </div>
  )
}
