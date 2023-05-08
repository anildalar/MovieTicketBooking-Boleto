//1 Import area
import React from 'react'
import { Link } from 'react-router-dom';
import SignUp2 from '../features/auth/SignUp';

//2.Defination area (RFC/RCC)
//RFC = React Functional Component
// The main object of a compoent is to return some HTML (JSX = Javascript and XML)
function SignUp() {
    

    //Every fucntion return something
    //2.3 Return statement 
    return (
        <>
            
            <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
                <div className="container">
                    <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                        <span className="cate">welcome</span>
                        <h2 className="title">to <Link to="/">Boleto</Link> </h2>
                        </div>
                        <SignUp2 />
                        <div className="option">
                            Already have an account? <Link to="/sign-in">Login</Link>
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

//3. Export area
//3.1 Default export
export default  SignUp;

//3.2 Named Expoert
