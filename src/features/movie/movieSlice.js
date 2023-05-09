import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./movieAPI";
import { BACKEND_URL } from "../../helper/helper";


let initialState = {
    movies:[
                {
                name:"Chor-Nikal-Ke-Bhaga",
                image:'https://c.saavncdn.com/010/Chor-Nikal-Ke-Bhaga-Soundtrack-from-the-Netflix-Film-Hindi-2023-20230314201135-500x500.jpg'
            },
            {
                name:"RRR123",
                image:'https://www.koimoi.com/wp-content/new-galleries/2021/12/ram-charan-gives-rrr-trailer-launch-a-miss-001.jpg'
            }]
        }

export const movieAsync = createAsyncThunk(
    'movie/getMovie',
    async ()=>{
        let movies = await getMovies()
        console.log('moviee data123 --->',movies.data.data);
        
        return movies.data.data.map((cv,idx,arr)=>{
            return {
                name:cv.attributes.name,
                image:BACKEND_URL+''+ cv.attributes.image_thumb.data.attributes.url,
            }
        });
        
    }
)



export const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        //1. P:V

        //2. Methods
       
    },
    extraReducers:(builder)=>{
        builder
            .addCase(movieAsync.pending, (state) => {
                console.log('pending state -->',state);
            })
            .addCase(movieAsync.rejected, (state,action) => {
                console.log('rejected state -->',state);
                console.log('rejected action --->',action);
            })
            .addCase(movieAsync.fulfilled, (state, action) => {
               //console.log('fullfiled state -->',state);
               console.log('fullfiled action --->',action);
               state.movies = action.payload
            });

    }

});


export const selectMovieInfo = (state)=> {
    console.log('New Movie State---->',state);
    return state;
};

export default movieSlice.reducer;