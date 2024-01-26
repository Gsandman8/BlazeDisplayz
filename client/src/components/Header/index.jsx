import { Link } from 'react-router-dom';
import {useState} from 'react';
import Nav from "../Nav";
import { FavoriteBorderOutlined, PersonOutlineRounded, LanguageOutlined } from '@mui/icons-material';
import { Menu, MenuItem, IconButton } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import Cart from '../Cart';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <div className="container">
        <div className="row">
          <section className="col-md-4">
            <Nav />
          </section>

          <section className="col-md-4 text-center">
            <Link to='/'><h1>BlazeDisplayz</h1></Link>
          </section>

          <section className="col-md-4 text-center">
            <div className="icons-container d-flex align-items-center justify-content-center">
              <Link to="/wishlist" className="heart-icon mr-3"><FavoriteBorderOutlined fontSize="large" /></Link>
              <Link to="/login" className="profile-icon"><PersonOutlineRounded fontSize="large" /></Link>
              <IconButton style={{marginRight: '10%'}} onClick={handleMenuOpen} aria-controls="language-menu" aria-haspopup="true">
                <LanguageOutlined fontSize="large" className='langIcon'/>
              </IconButton>
              <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>English</MenuItem>
                <MenuItem onClick={handleMenuClose}>Spanish</MenuItem>
              </Menu>
              <Cart/>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}
