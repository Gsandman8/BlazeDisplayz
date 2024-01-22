import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormState((prevState) => ({
        ...prevState,
        emailError: true,
      }));
      return;
    }

    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
      emailError: false,
    });
  };

  return (
    <div className="container my-1">
      <h2 style={{marginTop: '4%'}}>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          {/* <label htmlFor="email">Email address:</label> */}
          <TextField
            id="email"
            label="Email*"
            placeholder="me@email.com"
            fullWidth
            variant="standard"
            onChange={handleChange}
            name="email"
            value={formState.email}
            error={formState.emailError}
            helperText={formState.emailError ? 'Email Address is not valid' : ''}
          />
        </div>
        <div className="flex-row space-between my-2">
          {/* <label htmlFor="password">Password:</label> */}
          <TextField
            label="Password*"
            placeholder="******"
            fullWidth
            variant="standard"
            type="password"
            id="pwd"
            onChange={handleChange}
            name="password"
            value={formState.password}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row">
          <Button type="submit" variant="contained" style={{ backgroundColor: 'black', color: 'white', fontSize: '17px', marginTop: '5%', borderRadius: '20px' }}>
            Submit
          </Button>
        </div>
      </form>

      <div>
        <p style={{ fontSize: '17px', color: 'black', marginTop: '2%' }}>Don't have an account?</p>
        <Link to="/signup" style={{color:'black'}}>Create One Now</Link>
      </div>

    </div>
  );
}

export default Login;
