import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AuthService from "../utils/auth";

export default function Profile() {
  const { loading, data } = useQuery(QUERY_USER);
  const user = data?.user || {};
  console.log(user);

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <div>
      <h1>Account</h1>
      <Container maxWidth="lg">
        <Paper elevation={3} style={{ 
          padding: '20px',
          height: '100vh',
          width: '100%',
          backgroundColor:'#eeeeee',
          borderRadius: '10px' }}>

          <h2>Profile </h2>
          <h4>First Name</h4>
          <p>{user.firstName}</p>
          <h4>Last Name</h4>
          <p>{user.lastName}</p>
          <h4>Email</h4>
          <p>{user.email}</p>

          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
          
        </Paper>
      </Container>
    </div>
  );
}
