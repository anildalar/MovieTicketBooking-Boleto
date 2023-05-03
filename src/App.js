import  { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css';


import { BACKEND_URL } from './helper/helper';
import Layout from './pages/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NoPage from './pages/NoPage';
import { allPublicRoutes } from './routes/allRoutes';

// PO.then().catch().finally();

function App() {
  //2.1
  const [initialState,setIntialState] = useState({
                                                    movies:[/*  {
                                                      name:'Alone2',
                                                      image:'http://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
                                                    },
                                                    {
                                                      name:'Mars2',
                                                      image:"http://pixner.net/boleto/demo/assets/images/movie/movie02.jpg"
                                                    },
                                                    {
                                                      name:'Venus2',
                                                      image:"http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg"
                                                    } */],
                                                    cart:[]
                                                  });

  //After page load                                                 
  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/movies?populate=*`)
      .then(function (response) {
        // handle success
        console.log('response------>',response.data.data);
        setIntialState({
          ...initialState,
          movies: [
            //...initialState.movies,
            ...response.data.data.map((cv,idx,arr)=>{
              return {
                name:cv.attributes.name,
                image:BACKEND_URL+cv.attributes.image_thumb.data.attributes.url
              }
            })
          ]
        })
        console.log('mapped as per initial Object-->',);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    //1. InitialState

  },[]);
  //2.2

  //2.3
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {
              allPublicRoutes && allPublicRoutes.map((cv,idx,arr)=>{
                return <Route key={idx} path={cv.path} element={cv.element}></Route>
              })
            }
          </Route>
          
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
