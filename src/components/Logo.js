import React from 'react';
import logo from './../images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <h1 id="logo" className="logo">
            <Link to="/recipes">
                <span className="logo_text">Recipe App</span>
                <img className="logo_image" src={logo} />
            </Link>
        </h1>
    );
}

export default Logo;