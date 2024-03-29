import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {FavoriteBorderOutlined} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

export default function Nav() {
  const [isMensHovering, setIsMensHovering] = useState(false);
  const [isWomensHovering, setIsWomensHovering] = useState(false);
  const [isKidsHovering, setIsKidsHovering] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [state, dispatch] = useStoreContext();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerLinkClick = (category) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: category,
    });
  
    setDrawerOpen(false);
  };

  const handleMouseEnter = (category) => {
    if (!drawerOpen) {
      if (category === 'mens') {
        setIsMensHovering(true);
        setIsWomensHovering(false);
        setIsKidsHovering(false);
      } else if (category === 'womens') {
        setIsMensHovering(false);
        setIsWomensHovering(true);
        setIsKidsHovering(false);
      } else if (category === 'kids') {
        setIsMensHovering(false);
        setIsWomensHovering(false);
        setIsKidsHovering(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!drawerOpen) {
      setIsMensHovering(false);
      setIsWomensHovering(false);
      setIsKidsHovering(false);
    }
  };

  return (
    <nav className="nav-container">
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={handleDrawerToggle}
        className={`drawer-trigger ${drawerOpen ? 'hidden' : ''}`}
      >
        <MenuIcon style={{color: 'white'}} id='icon'/>
      </IconButton>
      {/* <Link to="/wishlist" className={`heartIcon drawer-trigger ${drawerOpen ? 'hidden' : ''}`}>
        <FavoriteBorderOutlined id='icon' />
      </Link> */}

      <ul className={`nav nav-tabs-container ${drawerOpen ? 'hidden' : ''}`}>
        <li className='nav-item'>
          <Link id='navLink' to='/newarrivals' className='nav-link'>
          NEW ARRIVAL
          </Link>
        </li>
        <li className="nav-item" 
        onMouseEnter={() => handleMouseEnter('mens')} 
        onMouseLeave={handleMouseLeave}
        >
          <Link id='navLink' to="/men" className='nav-link' onClick={()=>dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: "Men"
      })}>
            MENS
          </Link>
          {/* <ul id='menuList' className={`${isMensHovering ? '' : 'hidden'}`}>
            <li><Link> HOODIES </Link></li>
            <li><Link> PANTS </Link></li>
            <li><Link> SHOES </Link></li>
          </ul> */}
        </li>
        <li className="nav-item" 
        onMouseEnter={() => handleMouseEnter('womens')} 
        onMouseLeave={handleMouseLeave}>
          <Link id='navLink' to="/women" className='nav-link' onClick={()=>dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: "Women"
      })}>
            WOMENS
          </Link>
          {/* <ul id='menuList' className={`${isWomensHovering ? '' : 'hidden'}`}>
            <li><Link> HOODIES </Link></li>
            <li><Link> PANTS </Link></li>
            <li><Link> SHOES </Link></li>
          </ul> */}
        </li>
        <li className="nav-item" 
        onMouseEnter={() => handleMouseEnter('kids')} 
        onMouseLeave={handleMouseLeave}>
          <Link id='navLink' to="/kids" className='nav-link' onClick={()=>dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: "Children"
      })}>
            KIDS
          </Link>
          {/* <ul id='menuList' className={`${isKidsHovering ? '' : 'hidden'}`}>
            <li><Link> HOODIES </Link></li>
            <li><Link> PANTS </Link></li>
            <li><Link> SHOES </Link></li>
          </ul> */}
        </li>
      </ul>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        className="responsive-drawer"
      >
        <div className='sideBarContainer'>
          <IconButton
            className="close-button"
            onClick={handleDrawerToggle}
            aria-label="close"
          >
            <CloseIcon fontSize="large" style={{color:'white', marginTop:'20px'}}/>
          </IconButton>

          <section className='sideBarList'>
            <ul>
              <li>
                <Link 
                to='/newarrivals' 
                onClick={() => handleDrawerLinkClick('New Arrivals')}
                >
                  NEW ARRIVAL
                </Link>
              </li>
              <li>
                <Link 
                to='/men' 
                onClick={() => handleDrawerLinkClick('Men')}
                >
                  MENS
                </Link>
                {/* <ul className='sideBarMenu'>
                  <li><Link> HOODIES </Link></li>
                  <li><Link> PANTS </Link></li>
                  <li><Link> SHOES </Link></li>
                </ul> */}
              </li>
              <li>
                <Link 
                to='/women' 
                onClick={() => handleDrawerLinkClick('Women')}
                >
                  WOMENS
                </Link>
                {/* <ul className='sideBarMenu'>
                  <li><Link> HOODIES </Link></li>
                  <li><Link> PANTS </Link></li>
                  <li><Link> SHOES </Link></li>
                </ul> */}
              </li>
              <li>
                <Link 
                to='/kids' 
                onClick={() => handleDrawerLinkClick('Children')}
                >
                  KIDS
                </Link>
                {/* <ul className='sideBarMenu'>
                  <li><Link> HOODIES </Link></li>
                  <li><Link> PANTS </Link></li>
                  <li><Link> SHOES </Link></li>
                </ul>   */}
              </li>
            </ul>
          </section>
        </div>
      </Drawer>
    </nav>
  );
};
