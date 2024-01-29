import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Container align="center" >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography color='white' style={{ marginBottom: '3%'}} >
              <h3>Newsletter Signup:</h3>
            </Typography>
            <p className='newsDescription'>Sign up for exclusive offers, original stories, activism awareness, events and more.</p>
            <form>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                className='textfield'
                InputLabelProps={{ style: { color: 'white' } }}
                inputProps={{ style: { color: 'white', borderBottom: '3px solid white'} }}
              />
            </form>  
          </Grid>

          <Grid item xs={4}>
            <Typography color='white'>
              <h3>Need Help?</h3>
            </Typography>
            <div style={{ marginTop: '5%' }}>

              <Button variant='outlined' 
              sx={{marginLeft:'18px', 
              color: 'white', 
              borderColor: 'white', 
              '&:hover': 
              {backgroundColor: 
              'white',color: 'black', 
              borderColor: 'black'}}} 
              >
                Find Order
              </Button>

              <Button variant='outlined' 
              sx={{ marginLeft: '8px', 
              color: 'white', 
              borderColor: 'white', 
              '&:hover': 
              {backgroundColor: 'white',
              color: 'black',
               borderColor: 'black'}}}
               >
                Contact Us
              </Button>

              <Button variant='outlined'
              sx={{ marginLeft: '19px', 
              marginTop: '15px', 
              color: 'white', 
              borderColor:'white', 
              '&:hover': 
              {backgroundColor: 
              'white',color: 
              'black', borderColor: 
              'black'}}}
              >
              Accessibility
              </Button>

              <Button variant='outlined' 
              sx={{ marginTop: '15px', 
              marginLeft: '8px', 
              color: 'white', 
              borderColor:'white', 
              '&:hover': 
              {backgroundColor: 'white',
              color: 'black', 
              borderColor: 'black'}}}
              >
                Feedback
              </Button>

            </div>
          </Grid>

          <Grid item xs={4}>
            <Typography color='white'>
              <h3>More Info:</h3>
            </Typography>

            <Grid container spacing={1}  style={{ marginTop: '3%' }}>
              
              <Grid item xs={6}>
                <Link href="#" underline='hover' style={{ color: 'white', fontSize:'113%' }}>Gift Cards</Link>
                <br />
                <Link href="#" underline='hover' style={{ color: 'white', fontSize:'113%' }}>Find a Store</Link>
                <br />
                <Link href="#" underline='hover' style={{ color: 'white', fontSize:'113%' }}>Careers</Link>
              </Grid>

              <Grid item xs={6}>
                <Link href="#" underline='hover' style={{ color: 'white', fontSize:'113%' }}>Events</Link>
                <br />
                <Link href="#" underline='hover' style={{ color: 'white', fontSize:'113%' }}>Privacy Policy</Link>
                <br />
                <Link href="#" underline='hover' style={{ color: 'white', fontSize:'113%' }}>Worn Wear</Link>
              </Grid>
              
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
