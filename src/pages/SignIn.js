import React from 'react'
import SignIn2 from '../features/auth/SignIn'

export default function SignIn() {
    

    return (
        <>
            <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
                <div className="container">
                    <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                        <span className="cate">hello</span>
                        <h2 className="title">welcome back</h2>
                        </div>
                        <SignIn2 />
                        <div className="option">
                        Don't have an account? <a href="/sign-up">sign up now</a>
                        </div>
                        <div className="or"><span>Or</span></div>
                        <ul className="social-icons">
                        <li>
                            <a href="#0">
                            <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="#0" className="active">
                            <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                            <i className="fab fa-google" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}
