import React from 'react'

export default function SignUp() {
    return (
        <>
            <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
                <div className="container">
                    <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                        <span className="cate">welcome</span>
                        <h2 className="title">to Boleto </h2>
                        </div>
                        <form className="account-form">
                        <div className="form-group">
                            <label htmlFor="email1">Email<span>*</span></label>
                            <input type="text" placeholder="Enter Your Email" id="email1" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass1">Password<span>*</span></label>
                            <input type="password" placeholder="Password" id="pass1" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass2">Confirm Password<span>*</span></label>
                            <input type="password" placeholder="Password" id="pass2" required />
                        </div>
                        <div className="form-group checkgroup">
                            <input type="checkbox" id="bal" required defaultChecked />
                            <label htmlFor="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                        </div>
                        <div className="form-group text-center">
                            <input type="submit" defaultValue="Sign Up" />
                        </div>
                        </form>
                        <div className="option">
                        Already have an account? <a href="/sign-in">Login</a>
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
