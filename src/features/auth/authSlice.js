import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUp } from "./authAPI";


let initialState = {
    userInfo:null,
    token:null,

    loading:null,
    success:null,
    error:null,
}

export const signUpAsync = createAsyncThunk(
    'auth/signUp',
    async (payload)=>{
        let z = await signUp(payload)
        console.log('z--->',z.data);
        return z.data;
    }
)

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(signUpAsync.pending, (state) => {
                //state.status = 'loading';
            })
            .addCase(signUpAsync.fulfilled, (state, action) => {
                console.log('state-->',state);
                console.log('state-->',state);
                console.log('action-->',action);
                console.log('action.payload-->',action.payload);
                //state.status = 'idle';
                state.userInfo  = action.payload.user;
                state.token = action.payload.jwt;
                //state.value += action.payload;
            });
    }

});


export const selectUserInfo = (state)=> {
    console.log('NewState---->',state);
    return state;
};


export default authSlice.reducer;