import React from 'react'
import { useGetMovieByNameQuery } from '../../services/movies'
import { BACKEND_URL } from '../../helper/helper';

export default function Movie3(props) {
    //2.1 Hooks area
    const { data:movies, isLoading,isFetching,isError,error, } = useGetMovieByNameQuery(props.param)
    if (isLoading || isFetching) {
        return <div>loading...</div>;
    }
    
    return (
        <>
            {console.log('props--->',props.param)}
            {console.log('movie3--->',movies?.data)}
            <div className="row mb-10 justify-content-center">
                {
                    movies?.data.map((cv,idx,arr)=>{
                        return (
                                    <div key={idx} className="col-sm-6 col-lg-4">
                                        <div className="movie-grid">
                                        <div className="movie-thumb c-thumb">
                                            <a href="movie-details.html">
                                            <img src={BACKEND_URL+""+cv?.attributes.image_thumb.data?.attributes.url} alt="movie" />
                                            </a>
                                        </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                <a href="movie-details.html">{cv.attributes.name}</a>
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
                                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                    })
                }
                
            </div>
        </>
    )
}
