import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'

import { updateRTKStoreObj } from '../features/auth/authSlice'

export default function Layout() {
    //2.2 Hooks area

    let dispatch = useDispatch();

    useEffect(()=>{
        console.log('jwt----->',localStorage.getItem('jwt'));
        console.log('usefInfo----->',JSON.parse(localStorage.getItem('usefInfo')));
        let payload = {
            useinfo:JSON.parse(localStorage.getItem('usefInfo')),
            token:localStorage.getItem('jwt')
        }
        dispatch(updateRTKStoreObj(payload))
    },[]);

    return (
        <>
            
            {/* <div className="preloader">
                <div className="preloader-inner">
                <div className="preloader-icon">
                    <span />
                    <span />
                </div>
                </div>
            </div>
            
            <div className="overlay" /> */}
            
            <a href="#0" className="scrollToTop">
                <i className="fas fa-angle-up" />
            </a>
           
           <Header />

            <Outlet />

            <Footer />
        </>
    )
}
