import { Link } from 'react-router-dom';
import {useState} from 'react';
import Nav from "../Nav";
import { FavoriteBorderOutlined, PersonOutlineRounded, LanguageOutlined } from '@mui/icons-material';
import { Menu, MenuItem, IconButton } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import Cart from '../Cart';
import Auth from '../../utils/auth';

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

          <section className="col-md-4">
            <Link to='/'><h1>BlazeDisplayz</h1></Link>
          </section>

          <section className="col-md-4 text-center">
            <div className="icons-container d-flex align-items-center justify-content-center">
              <Link to="/wishlist">
                <FavoriteBorderOutlined className="heartIcon" id='icon'/>
              </Link>
              <Link to={Auth.loggedIn()?"/profile":'/login'}>
                <PersonOutlineRounded className="profile-icon" id='icon'/>
              </Link>
              <IconButton onClick={handleMenuOpen} aria-controls="language-menu" aria-haspopup="true">
                <LanguageOutlined className='langIcon'id='icon'/>
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
