// import Auth from "../../utils/auth";

// function Nav() {
//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/orderHistory">
//               Order History
//             </Link>
//           </li>
//           <li className="mx-1">
//             {/* this is not using the Link component to logout or user and then refresh the application to the start */}
//             <a href="/" onClick={() => Auth.logout()}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/signup">
//               Signup
//             </Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/login">
//               Login
//             </Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="flex-row px-1">
//       <nav>
//         {showNavigation()}
//       </nav>
//     </header>
//   );
// }

// export default Nav;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

export default function Nav() {
  const [isMensHovering, setIsMensHovering] = useState(false);
  const [isWomensHovering, setIsWomensHovering] = useState(false);
  const [isKidsHovering, setIsKidsHovering] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
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
        <MenuIcon style={{color: 'white'}} fontSize="large"/>
      </IconButton>

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
          <Link id='navLink' to="/men" className='nav-link'>
            MENS
          </Link>
          <ul id='menuList' className={`${isMensHovering ? '' : 'hidden'}`}>
            <li><Link> HOODIES </Link></li>
            <li><Link> PANTS </Link></li>
            <li><Link> SHOES </Link></li>
          </ul>
        </li>
        <li className="nav-item" 
        onMouseEnter={() => handleMouseEnter('womens')} 
        onMouseLeave={handleMouseLeave}>
          <Link id='navLink' to="/women" className='nav-link'>
            WOMENS
          </Link>
          <ul id='menuList' className={`${isWomensHovering ? '' : 'hidden'}`}>
            <li><Link> HOODIES </Link></li>
            <li><Link> PANTS </Link></li>
            <li><Link> SHOES </Link></li>
          </ul>
        </li>
        <li className="nav-item" 
        onMouseEnter={() => handleMouseEnter('kids')} 
        onMouseLeave={handleMouseLeave}>
          <Link id='navLink' to="/kids" className='nav-link'>
            KIDS
          </Link>
          <ul id='menuList' className={`${isKidsHovering ? '' : 'hidden'}`}>
            <li><Link> HOODIES </Link></li>
            <li><Link> PANTS </Link></li>
            <li><Link> SHOES </Link></li>
          </ul>
        </li>
      </ul>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        className="responsive-drawer"
      >
      <IconButton
        className="close-button"
        onClick={handleDrawerToggle}
        aria-label="close"
      >
        <CloseIcon fontSize="large"/>
      </IconButton>

      <section className='sideBarList'>
        <ul>
          <li><Link to='/newarrivals'>NEW ARRIVAL</Link></li>
          <li>
            <Link to='/men'> MENS </Link>
            <ul className='sideBarMenu'>
            <li><Link> HOODIES </Link></li>
              <li><Link> PANTS </Link></li>
              <li><Link> SHOES </Link></li>
              </ul>
            </li>
          <li>
            <Link to='/women'> WOMENS </Link>
            <ul className='sideBarMenu'>
              <li><Link> HOODIES </Link></li>
              <li><Link> PANTS </Link></li>
              <li><Link> SHOES </Link></li>
            </ul>
          </li>
          <li>
            <Link to='/kid'> KIDS </Link>
            <ul className='sideBarMenu'>
              <li><Link> HOODIES </Link></li>
              <li><Link> PANTS </Link></li>
              <li><Link> SHOES </Link></li>
            </ul>  
          </li>
        </ul>
      </section>
      </Drawer>
    </nav>
  );
};
