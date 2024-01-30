import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AuthService from "../utils/auth";
import { Link } from 'react-router-dom';

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER);
  const user = data?.user || {};
  console.log(user);

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <div className="Profile">
      <h1 style={{ marginLeft:'15%', marginTop:'2%', marginBottom:'2%'}}>Account</h1>
      <Container maxWidth="md">
        <Paper elevation={3} style={{ 
          padding: '20px',
          height: '55vh',
          width: '90%',
          backgroundColor:'#eeeeee',
          borderRadius: '10px' }}>

          <h1 style={{ marginBottom:'2%'}}>Profile:</h1>
          <h4>First Name</h4>
          <p style={{fontSize:'130%'}}>{user.firstName}</p>
          <h4>Last Name</h4>
          <p style={{fontSize:'130%'}}>{user.lastName}</p>
          <h4>Email</h4>
          <p style={{fontSize:'130%'}}>{user.email}</p>
          
          <div className="profileBtn" style={{ marginTop:'6%'}}>
            <Button variant="contained" color="primary" onClick={handleLogout} 
              sx={{ 
                marginRight: '5%', 
                backgroundImage: 'linear-gradient(to top, #732c7b, #36409e)',
                color: 'white', 
                '&:hover': 
                { filter: 'brightness(80%)',
                backgroundColor: '#2c2f70'}}}
                >
              Logout
            </Button>

            <Button variant="contained" color="primary" 
            sx={{
              backgroundImage: 'linear-gradient(to top, #732c7b, #36409e)',
              color: 'white',
              '&:hover': 
              { filter: 'brightness(80%)',
              backgroundColor: '#2c2f70' }}}
            >
              <Link to="/orderHistory">
                View Order History
              </Link>
            </Button>
          </div>  
        </Paper>
      </Container>
    </div>
  );
}
