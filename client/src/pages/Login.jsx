import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MissingOrder from '../components/MissingOrder/MissingOrder';
import '../components/MissingOrder/MissingOrder.css';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ 
    email: '', 
    password: '',
    emailError: false,
    passwordError: false,});

  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormState((prevState) => ({
        ...prevState,
        emailError: true,
        passwordError: false,
      }));
      return;
    }

    if (!formState.password.trim()) {
      setFormState((prevState) => ({
        ...prevState,
        passwordError: true,
        emailError: false,
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
      setFormState((prevState) => ({
        ...prevState,
        passwordError: true,
        emailError: false,
      }));
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
    <div className="container my-1" style={{paddingBottom:'115px'}}>
      <h2 style={{marginTop: '4%'}}>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
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
          error={formState.passwordError}
          helperText={formState.passwordError ? 'Password is incorrect' : ''}
        />
        </div>
        {/* {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null} */}
        <div className="flex-row">
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#BF3131', color: 'white', fontSize: '17px', marginTop: '5%', borderRadius: '20px', '&:hover': {filter: 'brightness(80%)', backgroundColor: '#BF3131' } }}>
            Submit
          </Button>
        </div>
      </form>

      <div>
        <p style={{ fontSize: '17px', color: 'black', marginTop: '2%', fontWeight: 'bold' }}>Don't have an account?</p>
        <Link
          to="/signup"
          style={{color: 'black', textDecoration: 'none', fontSize: '17px'
          }} onMouseEnter={(e) => {
            e.target.style.borderBottom = '2px solid black';
          }}  onMouseLeave={(e) => {
            e.target.style.borderBottom = '1px solid transparent';
          }}
        >Create One Now</Link>
      </div>

      <MissingOrder />

    </div>
  );
}

export default Login;
