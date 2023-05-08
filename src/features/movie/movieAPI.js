import axios from "axios";
import { BACKEND_URL } from "../../helper/helper";


export const getMovies = (payload)=>{
    // Method will take some time for response
    //let object = new ClassName();
    //return object
    // short 
    // return new ClassName();
    return new Promise((resolve, reject)=>{
        // We will call the actual API
        //PO.then().catch().finally()

        axios.post(`${BACKEND_URL}/api/auth/local/register`,payload)
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