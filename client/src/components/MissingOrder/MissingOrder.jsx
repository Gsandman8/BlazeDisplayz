import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './MissingOrder.css';

export default function MissingOrder() {
  return (
    <Paper className='MissingOrder' elevation={3} 
      sx={{ 
        backgroundImage: 'linear-gradient(to top, #732c7b, #36409e)',
        color: 'white', 
        borderRadius: '10px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'}}
      >
      <h2>Looking for your order?</h2>
      <p>
        See your order even if you are not a registered user.
        Enter the order number and your last name.
      </p>
      <Link to="/missingorder" style={{ textDecoration: 'none' }}>
        <Button 
          sx={{ 
            color: 'white', 
            border: '2px solid white', 
            borderRadius: '20px', 
            marginTop: '28%', '&:hover': {
            filter: 'brightness(80%)',
            backgroundColor: '#2c2f70'}}}
            >
          Find your Order
        </Button>
      </Link>
    </Paper>
  );
}
