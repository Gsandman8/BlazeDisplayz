import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

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
    
    if (formState.confirmEmail !== formState.email) {
      setConfirmEmailErr("Email doesn't match!");
    } else{
      setConfirmEmailErr('');
    }
  
    if (formState.confirmPassword !== formState.password) {
      setConfirmPasswordErr("Password doesn't match");
    } else{
      setConfirmPasswordErr('');
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
    <div className='createAccContainer'>
      <Link to="/login">← Go to Login</Link>

      <h2> Create an Account</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            placeholder="First Name *"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Last Name *"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Email *"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Confirm Email *"
            name="confirmEmail"
            type="email"
            id="confirmEmail"
            onChange={handleChange}
          />
        </div>
        {confirmEmailErr &&  <p style={{ color: 'red' }}>{confirmEmailErr}</p>}
        <div>
          <input
            placeholder="Password *"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Confirm Password *"
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            onChange={handleChange}
          />
        </div>
        {confirmPasswordErr && <p style={{ color: 'red' }}>{confirmPasswordErr}</p>}
        <div>
          <button type="submit">Create Account </button>
        </div>
      </form>
    </div>
  );
}