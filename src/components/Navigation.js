import React from 'react'
import { Link } from 'react-router-dom'

export default function 
Navigation() {
    return (
        <>
            <ul className="menu">
                <li>
                    <Link to="/" className="active">Home123</Link>
                    <ul className="submenu">
                    <li>
                        <Link to="/" className="active">Home One</Link>
                    </li>
                    <li>
                        <Link to="/index-2">Home Two</Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link to="/#0">movies</Link>
                    <ul className="submenu">
                    <li>
                        <Link to="/movie-grid">Movie Grid</Link>
                    </li>
                    <li>
                        <Link to="/movie-list">Movie List</Link>
                    </li>
                    <li>
                        <Link to="/movie-details">Movie Details</Link>
                    </li>
                    <li>
                        <Link to="/movie-details-2">Movie Details 2</Link>
                    </li>
                    <li>
                        <Link to="/movie-ticket-plan">Movie Ticket Plan</Link>
                    </li>
                    <li>
                        <Link to="/movie-seat-plan">Movie Seat Plan</Link>
                    </li>
                    <li>
                        <Link to="/movie-checkout">Movie Checkout</Link>
                    </li>
                    <li>
                        <Link to="/popcorn">Movie Food</Link>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link to="/#0">pages</Link>
                    <ul className="submenu">
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/apps-download">Apps Download</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/404">404</Link>
                    </li>
                    </ul>
                </li>
               
                <li>
                    <Link to="/contact">contact</Link>
                </li>
                <li>
                    <a href="/#0">Lanaguage</a>
                    <ul className="submenu">
                        <li>
                            <a href="false" onClick={()=>{  }}>English</a>
                        </li>
                        <li>
                            <a href="false" onClick={()=>{  }}>Hindi</a>
                        </li>
                    </ul>
                </li>
                <li className="header-button pr-0">
                    <Link to="/sign-up">join us</Link>
                </li>
            </ul>
        </>
    )
}
