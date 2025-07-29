import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const register = createAsyncThunk(
    "auth/register",
    async (formdata) => {
        try {
            const res = await axios.post("http://localhost:3004/api/auth/register", formdata)
            console.log(res.data, "dddddddddddd")
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data?.error || 'Signup failed');
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async(formdata)=>{
        try{
            const res = await axios.post("http://localhost:3004/api/auth/login",formdata)
              const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            return { token, user };
            // return res.data
        }
        catch(err){
            console.log(err,"thunk login error")
        }
    }
)

const initialState = {
    user: JSON.parse(localStorage.getItem('user') || null),
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    Users: [],
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload.User,"aaaaaaaaaa")
                state.Users = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(login.pending,(state)=>{
                state.loading =true
                state.error=null
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.loading = false
                // console.log(action.payload.user,"pppppppp")
                state.User = action.payload.user
            })
            .addCase(login.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            })
    }       
})

const authReducer = authSlice.reducer
export default authReducer