import axios from "axios";
import { BACKEND_URL } from "../../helper/helper";


export const getMovies = ()=>{
    // Method will take some time for response
    //let object = new ClassName();
    //return object
    // short 
    // return new ClassName();
    
    return new Promise((resolve, reject)=>{
        // We will call the actual API
        //PO.then().catch().finally()

        axios.get(`${BACKEND_URL}/api/movies?populate=*`)
        .then(function (response) {
            console.log(response);
            resolve(response)
        })
        .catch(function (error) {
            console.log(error);
            reject(error)
        });
    });

}