import React from 'react'

export default function Navigation() {
    return (
        <>
            <ul className="menu">
                <li>
                    <a href="/" className="active">Home</a>
                    <ul className="submenu">
                    <li>
                        <a href="/" className="active">Home One</a>
                    </li>
                    <li>
                        <a href="/index-2">Home Two</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="/#0">movies</a>
                    <ul className="submenu">
                    <li>
                        <a href="/movie-grid">Movie Grid</a>
                    </li>
                    <li>
                        <a href="/movie-list">Movie List</a>
                    </li>
                    <li>
                        <a href="/movie-details">Movie Details</a>
                    </li>
                    <li>
                        <a href="/movie-details-2">Movie Details 2</a>
                    </li>
                    <li>
                        <a href="/movie-ticket-plan">Movie Ticket Plan</a>
                    </li>
                    <li>
                        <a href="/movie-seat-plan">Movie Seat Plan</a>
                    </li>
                    <li>
                        <a href="/movie-checkout">Movie Checkout</a>
                    </li>
                    <li>
                        <a href="/popcorn">Movie Food</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="/#0">pages</a>
                    <ul className="submenu">
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/apps-download">Apps Download</a>
                    </li>
                    <li>
                        <a href="/sign-in">Sign In</a>
                    </li>
                    <li>
                        <a href="/sign-up">Sign Up</a>
                    </li>
                    <li>
                        <a href="/404">404</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="/contact">contact</a>
                </li>
                <li className="header-button pr-0">
                    <a href="/sign-up">join us</a>
                </li>
            </ul>
        </>
    )
}
