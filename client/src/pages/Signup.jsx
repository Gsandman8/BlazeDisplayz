import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import MissingOrder from '../components/MissingOrder/MissingOrder';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';

export default function Signup(props) {
  const [formState, setFormState] = useState({ 
    email: '', 
    password: '',
    confirmPassword: '', 
    confirmEmail: '' 
  });

  const [addUser] = useMutation(ADD_USER);
  const [confirmEmailErr, setConfirmEmailErr] = useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    let hasError = false;

    if (formState.confirmEmail !== formState.email) {
      setConfirmEmailErr("Email doesn't match!");
      hasError = true;
    } else{
      setConfirmEmailErr('');
    }
  
    if (formState.confirmPassword !== formState.password) {
      setConfirmPasswordErr("Password doesn't match");
      hasError = true;
    } else{
      setConfirmPasswordErr('');
    }

    if (hasError) {
      return;
    }

    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });

      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
  <main className='container createAccContainer'>
    <div className='row'>
      <section className="col-md-6">
        <Link to="/login">← Go to Login</Link>
        <h2> Create an Account</h2>
        <form onSubmit={handleFormSubmit}>
          <TextField
            placeholder="John"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
            variant="standard"
            fullWidth
            label="First Name *"
            style={{marginBottom:'10px'}}
          />
          <TextField
            placeholder="Doe"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
            variant="standard"
            fullWidth
            label="Last Name *"
            style={{marginBottom:'10px'}}
          />
          <TextField
            placeholder="me@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            variant="standard"
            fullWidth
            label="Email *"
            style={{marginBottom:'10px'}}                 
          />  
          <TextField
            placeholder="me@email.com"
            name="confirmEmail"
            type="email"
            id="confirmEmail"
            onChange={handleChange}
            variant="standard"
            fullWidth
            label="Confirm Email *"     
            style={{marginBottom:'10px'}}           
          />
          
          {confirmEmailErr &&  <p style={{ color: 'red' }}>{confirmEmailErr}</p>}
        
          <TextField
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            variant="standard"
            fullWidth
            label="Password *"
            style={{marginBottom:'10px'}}
          /> 
          <TextField
            placeholder="********"
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            variant="standard"
            fullWidth
            label="Confirm Password *"
            style={{marginBottom:'10px'}}
          />
          
          {confirmPasswordErr && <p style={{ color: 'red' }}>{confirmPasswordErr}</p>}
        
          <button type="submit">Create Account </button>   
        </form>
      </section>

      <section className="col-md-6">
          <MissingOrder/>
      </section>
    </div>
  </main>
  );
}