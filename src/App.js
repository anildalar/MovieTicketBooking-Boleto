import  { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MovieGrid from './pages/MovieGrid';
import MovieDetails from './pages/MovieDetails';
import MovieTicketPlan from './pages/MovieTicketPlan';
import MovieSeatPlan from './pages/MovieSeatPlan';
import MovieCheckout from './pages/MovieCheckout';
import Popcorn from './pages/Popcorn';
import { URL } from './helper/helper';




// PO.then().catch().finally();

export const initialState = {
  movies:[
    {
      name:'Alone22',
      image:'http://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
    },
    {
      name:'Mars22',
      image:"http://pixner.net/boleto/demo/assets/images/movie/movie02.jpg"
    },
    {
      name:'Venus22',
      image:"http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg"
    }
  ],
  cart:[]
}
export const MovieContext = createContext();

function App() {
  //2.1
  const [initialState,setIntialState] = useState({
                                                    movies:[ {
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
                                                    }],
                                                    cart:[]
                                                  });

  useEffect(()=>{
    axios.get(`${URL}/api/movies?populate=*`)
      .then(function (response) {
        // handle success
        console.log('response------>',response.data.data);
        //m = response.data.data;
       /*  setIntialState({
          ...initialState,
          movies:[...response.data.data]
        }); */
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
        <Route path="/" element={<MovieContext.Provider value={initialState}><Layout movs={initialState} /></MovieContext.Provider>}>
          <Route index element={<Home/>}></Route>
          <Route path="/movie-grid" element={<MovieGrid />}></Route>
          <Route path="/movie-details" element={<MovieDetails />}></Route>
          <Route path="/movie-ticket-plan" element={<MovieTicketPlan />}></Route>
          <Route path="/movie-seat-plan" element={<MovieSeatPlan />}></Route>
          <Route path="/movie-checkout" element={<MovieCheckout />}></Route>
          <Route path="/popcorn" element={<Popcorn />}></Route>
        </Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>

        <Route path="*" element={<NoPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
