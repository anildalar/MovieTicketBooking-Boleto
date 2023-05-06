import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "./authAPI";


let initialState = {
    userInfo:null,
    token:null,

    loading:false,
    success:false,
    error:false,
    errorMsg:'',
    testing:"Hello dosto aap kese ahi"
}

export const signUpAsync = createAsyncThunk(
    'auth/signUp',
    async (payload)=>{
        let z = await signUp(payload)
        console.log('z--->',z.data);
        return z.data;
    }
)

export const signInAsync = createAsyncThunk(
    'auth/signIn',
    async (payload)=>{
        let loginResponse = await signIn(payload)
        console.log('loginResponse--->',JSON.stringify(loginResponse.data.user));
        localStorage.setItem('usefInfo',JSON.stringify(loginResponse.data.user));
        localStorage.setItem('jwt',loginResponse.data.jwt);
        return loginResponse.data;
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
                state.loading = true;// I can directly update the state
            })
            .addCase(signUpAsync.rejected, (state,action) => {
                //state.status = 'loading';
                state.loading = false;
                state.success = false;
                state.error = true;
                console.log('--------------------> Rejected block executed')
                console.log('-------------------->action',action)
                state.errorMsg = 'User Not Registered!'; //action.payload;
            })
            .addCase(signUpAsync.fulfilled, (state, action) => {
                console.log('--------------------> fulfilled block executed')
                console.log('state-->',state);
                console.log('state-->',state);
                console.log('action-->',action);
                console.log('action.payload-->',action.payload);
                //state.status = 'idle';
                //update the store object
                state.loading = false;
                state.success = true;
                state.error = false;
                state.userInfo  = action.payload.user;
                state.token = action.payload.jwt;
                //state.value += action.payload;
            });
        builder
            .addCase(signInAsync.pending, (state) => {
                //state.status = 'loading';
                state.loading = true;// I can directly update the state
            })
            .addCase(signInAsync.rejected, (state,action) => {
                //state.status = 'loading';
                state.loading = false;
                state.success = false;
                state.error = true;
                console.log('--------------------> Rejected block executed')
                console.log('-------------------->action',action)
                state.errorMsg = 'Invalid Credentails!'; //action.payload;
            })
            .addCase(signInAsync.fulfilled, (state, action) => {
                console.log('--------------------> fulfilled block executed')
                console.log('state-->',state);
                console.log('state-->',state);
                console.log('action-->',action);
                console.log('action.payload-->',action.payload);
                //state.status = 'idle';
                //update the store object
                state.loading = false;
                state.success = true;
                state.error = false;
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