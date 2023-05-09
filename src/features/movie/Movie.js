import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieAsync, selectMovieInfo } from './movieSlice';

export default function Movie() {
    //2.1 Hooks area

    let movieInfo = useSelector(selectMovieInfo)
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieAsync())
    },[]);

    return (
        <>
           { console.log('movieInfo--->',movieInfo) }
             <div className="article-section padding-bottom">
                        <div className="section-header-1">
                        <h2 className="title">movies</h2>
                        <a className="view-all" href="movie-grid.html">View All</a>
                        </div>
                        <div className="row mb-30-none justify-content-center">
                            {
                               movieInfo.movie.movies && 
                               movieInfo.movie.movies.map((cv,idx,arr)=>{
                                        console.log(cv);
                                        return (
                                                <div key={idx} className="col-sm-6 col-lg-4">
                                                    <div className="movie-grid">
                                                    <div className="movie-thumb c-thumb">
                                                        <a href="#0">
                                                            <img src={cv.image} alt="movie" />
                                                        </a>
                                                    </div>
                                                    <div className="movie-content bg-one">
                                                        <h5 className="title m-0">
                                                        <a href="#0">{cv.name}</a>
                                                        </h5>
                                                        <ul className="movie-rating-percent">
                                                            <li>
                                                                <div className="thumb">
                                                                <img src="assets/images/movie/tomato.png" alt="movie" />
                                                                </div>
                                                                <span className="content">88%</span>
                                                            </li>
                                                            <li>
                                                                <div className="thumb">
                                                                <img src="assets/images/movie/cake.png" alt="movie" />
                                                                </div>
                                                                <span className="content">88%</span>
                                                                <br />
                                                                
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                </div>
                                            )
                                    })
                            }
                        </div>
                    </div>
        </>
    )
}
