import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const activeLink = (link) => {
    if (link === location.pathname) {
      return "active";
    } else {
      return "k";
    }
  };

  return (
    <div className='header'>
      <ul>
        <li>
          <Link to='/' className={`${activeLink("/")}`}>
            Main
          </Link>
        </li>
        <li>
          <Link to='/pages/one' className={`${activeLink("/pages/one")}`}>
            Page One
          </Link>
        </li>
        <li>
          <Link to='/pages/two' className={`${activeLink("/pages/two")}`}>
            Page Two
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
