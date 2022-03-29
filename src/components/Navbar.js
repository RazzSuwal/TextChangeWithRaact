import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav>
      <div id="navbar">
        <Link to ="/">{props.Home}</Link>
        <Link to ="/About">About</Link>
        <Link to ="/">{props.Details}</Link>
        <Link to ="/">Contacts</Link>
        <div id="searchbar">
          <label class="switch">
            Enable DarkMode
            <input onClick={props.toggleMode} type="checkbox" />
            <span class="slider round"></span>
          </label>
          <input type="search" placeholder='searching' name="search" id="search" />
          <button type='submit'>Search</button>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  Home: PropTypes.string,
  Details: PropTypes.string
}
