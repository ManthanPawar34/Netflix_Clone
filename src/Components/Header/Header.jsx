import React from 'react';

import logo from "./Netflix-Logo-PNG-Image.webp"
import { Link } from 'react-router-dom';
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="" /> 
        <div>
        <Link to="/tVshows"> TVshows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/myList">My List</Link>
        </div>

        <ImSearch/>

    </div>
  )
}

export default Header;