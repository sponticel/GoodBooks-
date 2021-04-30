import React, { useState } from 'react';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    img_url: ''
  })
  const { username, email, password,img_url } = formData;
  const { handleSignUp } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSignUp(formData)
      }}>
        <h3>SignUp</h3>
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
        <br />
        <label>
            Avatar URL:
            <input
              type='img_url'
              name='img_url'
              value={img_url}
              onChange={handleChange}
            />
        </label>
        <button>Submit</button>
      </form>
  )
}
