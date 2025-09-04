import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const gettingUserwithAccount = createAsyncThunk(
    "usewithaccount/get",
    async(id)=>{
        console.log(id,"sisisisisisisi")
        const res = await axios.get(`http://localhost:3004/api/userwithaccount/useraccountdetail/${id}`)
        return res.data
    }
)

const userDetailSlice = createSlice({
    name:"UserAccount",
    initialState:{
        UserDetails:[],
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(gettingUserwithAccount.pending,(state)=>{
            state.status ='pending'
        })
        .addCase(gettingUserwithAccount.fulfilled,(state,action)=>{
            state.status = 'fulfilled'
            state.UserDetails = action.payload
        })
        .addCase(gettingUserwithAccount.rejected,(state,action)=>{
            state.status ='rejected'
            state.error = action.error.message
        })
    }
})

const userAccountReducer = userDetailSlice.reducer
export default userAccountReducer