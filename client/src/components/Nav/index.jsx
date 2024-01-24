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
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

export default function Nav() {
  const [isMensHovering, setIsMensHovering] = useState(false);
  const [isWomensHovering, setIsWomensHovering] = useState(false);
  const [isKidsHovering, setIsKidsHovering] = useState(false);

  function handleMouseEnter(category) {
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

  function handleMouseLeave() {
    setIsMensHovering(false);
    setIsWomensHovering(false);
    setIsKidsHovering(false);
  }

  return (
    <ul className="nav nav-tabs-container">
      <li className='nav-item'>
        <Link id='navLink' to='/newarrival' className='nav-link'>
        NEW ARRIVAL
        </Link>
      </li>
      <li className="nav-item" 
      onMouseEnter={() => handleMouseEnter('mens')} 
      onMouseLeave={handleMouseLeave}
      >
        <Link id='navLink' to="/mens" className='nav-link'>
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
        <Link id='navLink' to="/mens" className='nav-link'>
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
          <li><Link> SHOES</Link></li>
        </ul>
      </li>
    </ul>
  );
};
