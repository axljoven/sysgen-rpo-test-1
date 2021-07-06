import React from 'react';
import { Link } from "react-router-dom";

const SiteNav = () => {
    return (
        <nav className="site-nav">
            <ul className="site-nav_list">
                <li className="site-nav_item"><Link to="/recipes">Recipes</Link></li>
                <li className="site-nav_item"><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    )
}

export default SiteNav;