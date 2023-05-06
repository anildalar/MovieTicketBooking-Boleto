import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo, signUpAsync } from './authSlice';
import { useState } from 'react';
import swal from 'sweetalert';
import Spinner from '../../components/Spinner';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    //2.1 Hooks area

    const [payload,setPayload] = useState( {
        "username": null,
        "email": null,
        "password": null,
        "cpassword": null,
    });
    let userInfo = useSelector(selectUserInfo);
    const dispatch = useDispatch()

    

    const navigate = useNavigate()

    useEffect(()=>{
        if(userInfo.auth.success === true){
            swal("User Registered Successfully!", "", "success");
            setTimeout(()=>{
                navigate(`/sign-in/${payload.email}/${payload.password}`);
            },3000)
        }
        if(userInfo.auth.error === true){
            swal(userInfo.auth.errorMsg, "", "error");
        }
    },[userInfo]);

    //2.2 Function defination area
    let handleChange = (e)=>{
        console.log('e.target.name ---->',e.target.name)
        console.log('e.target.value ---->',e.target.value)
        setPayload({
            ...payload, // spread is a copy opertor
            [e.target.name]:e.target.value
        })
    }
    let submitData = ()=>{
        //alert('IJIJIJIJIJ');
        console.log('to be submited payload --->',payload);
        if(payload.password === payload.cpassword){
            delete payload.cpassword;
            console.log("ready to be submit the payload --->",payload);
            dispatch(signUpAsync(payload))
            //Call the async api
        }else{
            swal("Validation error!", "Password and Confirm password doesnt match", "error")
            
        }
    } // ES6 2015
    return (
        <>
            { console.log('userInfo--->',userInfo) }

            {console.log('payload--->',payload)}

            <form className="account-form">
                
                <div className="form-group">
                    <label htmlFor="username">Username<span>*</span></label>
                    <input type="text" name="username" placeholder="Enter Your Username" onChange={handleChange} id="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email1">Email<span>*</span></label>
                    <input type="text" name="email" placeholder="Enter Your Email" id="email1" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pass1">Password<span>*</span></label>
                    <input type="password" name="password" placeholder="Password" id="pass1" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pass2">Confirm Password<span>*</span></label>
                    <input type="password" name="cpassword" placeholder="Password" id="pass2" onChange={handleChange} required />
                </div>
                <div className="form-group checkgroup">
                    <input type="checkbox" id="bal" required defaultChecked />
                    <label htmlFor="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                </div>
                <div className="form-group text-center">
                    <button type="button" className="bg-transparent text-white border-bottom" onClick={submitData}>
                        { userInfo.auth.loading?<Spinner/>:'Sign Up' }
                    </button>
                </div>
            </form>
        </>
    )
}
