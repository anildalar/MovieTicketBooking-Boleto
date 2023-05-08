import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectUserInfo, signInAsync } from './authSlice';
import swal from 'sweetalert';

export default function SignIn() {
    //2.1 Hooks area
    const [payload,setPayload] = useState({
        "identifier":"oklabs1@gmail.com",
        "password":"123456"
    })
    let { e,p } = useParams();
    let userinfo = useSelector(selectUserInfo)
    let dispatch = useDispatch();
    const navigate = useNavigate() // RRD V6

    useEffect(()=>{
        if(userinfo.auth.success){
            //swal("User Logged Successfully!", "", "success");
            navigate(`/`);
        }
    },[userinfo]);
    //2.2 Function defination
    let login = ()=>{
        //alert('OKOKOKKKOKOKOK');
        console.log('ready to submit with this payload ----->',payload);
        dispatch(signInAsync(payload))
    }
    let handleChange = (e)=>{
        console.log(e.target.value);
        setPayload({
            ...payload,
            [e.target.name]:e.target.value
        });
    }
    
    return (
        <>
            
            <form className="account-form">
                <div className="form-group">
                    <label htmlFor="email2">Email<span>*</span></label>
                    <input type="text" name="identifier" value={ e?e:payload.identifier } onChange={handleChange} placeholder="Enter Your Email" id="email2" required />
                </div>
                <div className="form-group">
                    <label htmlFor="pass3">Password<span>*</span></label>
                    <input type="password" name="password" value={p?p:payload.password} onChange={handleChange} placeholder="Password" id="pass3" required />
                </div>
                <div className="form-group checkgroup">
                    <input type="checkbox" id="bal2" required defaultChecked />
                    <label htmlFor="bal2">remember password</label>
                    <a href="#0" className="forget-pass">Forget Password</a>
                </div>
                <div className="form-group text-center">
                    <input type="button" defaultValue="log in" onClick={login} />
                </div>
            </form>
        </>
    )
}
