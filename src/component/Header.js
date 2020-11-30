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
          <Link to='/main' className={`${activeLink("/main")}`}>
            Main
          </Link>
        </li>
        <li>
          <Link to='/pages/allposts' className={`${activeLink("/pages/allposts")}`}>
            All Posts
          </Link>
        </li>
        <li>
          <Link to='/pages/startbucks' className={`${activeLink("/pages/startbucks")}`}>
            Star Bugs
          </Link>
        </li>
        <li>
          <Link to='/pages/search-list' className={`${activeLink("/pages/search-list")}`}>
            Search-list
          </Link>
        </li>
        <li>
          <Link to='/pages/top-scroll-bar' className={`${activeLink("/pages/top-scroll-bar")}`}>
            Top Scroll bar
          </Link>
        </li>
        <li>
          <Link to='/pages/callback-memo' className={`${activeLink("/pages/callback-memo")}`}>
            CallbackMemo
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
