import React from 'react'
import Navigation from './Navigation'

export default function Header() {
    return (
        <>
            <header className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="/">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </a>
                        </div>
                        <Navigation />

                        <div className="header-bar d-lg-none">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
