import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <NavLink exact to="/" className="navbar-brand">LOGGA</NavLink>
                <ul className="nav-links">
                    <li><NavLink exact to="/" className="nav-link" activeClassName="active-link">Nyheter</NavLink></li>
                    <li><NavLink exact to="/login" className="nav-link" activeClassName="active-link">Logga In</NavLink></li>
                    </ul>
                    </div>
                    </nav>
    )
}

export default Navbar

