import React, { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import {useState } from 'react';
import emailjs from '@emailjs/browser';

import './Footer.css';

export default function Footer() {
  const [newsletter, setNewsletter] = useState('');
  const form = useRef();

  return (
    <div>
    <footer className="footer">
      <Container align="center" >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography component="span" color='white' style={{ marginBottom: '3%'}} >
              <h3>Newsletter Signup:</h3>
            </Typography>
            <p className='newsDescription'>Sign up for exclusive offers, original stories, activism awareness, events and more.</p>
            <form ref={form} onChange={(e) => setNewsletter(e.target.value)}
                onSubmit={(e)=>{
                  e.preventDefault();
                  console.log(newsletter)
                  
                  emailjs.sendForm('DBService', 'template_epdsnoo', form.current, 'Zpm2ybnuv9a7vDMBX')
                  .then((result) => {
                      console.log(result.text);
                  }, (error) => {
                      console.log(error.text);
                  });

                  setNewsletter('');
                }}
                  >
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                className='textfield'
                name="newsletter"
                InputLabelProps={{ style: { color: 'white' } }}
                inputProps={{ style: { color: 'white', borderBottom: '3px solid white'},
                value: newsletter,}}
              />
            </form>  
          </Grid>

          <Grid item xs={4}>
            <Typography component="span" color='white'>
              <h3>Need Help?</h3>
            </Typography>
            <div style={{ marginTop: '5%' }}>

              <Button className='findOrderBtn'variant='outlined' 
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
            <Typography component="span" color='white'>
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
    </div>
  );
}
