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
              Newsletter Signup
            </Typography>
            <p className='newsDescription'>Sign up for exclusive offers, original stories, activism awareness, events and more.</p>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              className='textfield'
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{ style: { color: 'white', borderBottom: '3px solid white'} }}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography color='white'>
              Need Help?
            </Typography>
            <div style={{ marginTop: '5%' }}>
              <Button variant='outlined' style={{ marginLeft: '18px', color: 'white', borderColor: 'white' }}>Example 1</Button>
              <Button variant='outlined' style={{ marginLeft: '8px', color: 'white', borderColor: 'white' }}>Example 2</Button>
              <Button variant='outlined' style={{ marginLeft: '19px', marginTop: '15px', color: 'white', borderColor: 'white' }}>Example 3</Button>
              <Button variant='outlined' style={{ marginTop: '15px', marginLeft: '8px', color: 'white', borderColor: 'white' }}>Example 4</Button>
            </div>
          </Grid>

          <Grid item xs={4}>
            <Typography color='white'>
              More Info
            </Typography>
            <Grid container spacing={1}  style={{ marginTop: '3%' }}>
              <Grid item xs={6}>
                <Link href="#" style={{ color: 'white' }}>Random Text 1</Link>
                <br />
                <Link href="#" style={{ color: 'white' }}>Random Text 2</Link>
                <br />
                <Link href="#" style={{ color: 'white' }}>Random Text 3</Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" style={{ color: 'white' }}>Random Text 4</Link>
                <br />
                <Link href="#" style={{ color: 'white' }}>Random Text 5</Link>
                <br />
                <Link href="#" style={{ color: 'white' }}>Random Text 6</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
