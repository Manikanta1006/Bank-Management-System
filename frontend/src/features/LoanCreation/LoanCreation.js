import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loanCreation = createAsyncThunk(
    "loan/create",
    async(data)=>{
        const res = await axios.post("http://localhost:3004/api/loan/createloan",data)
        return res.data
    }
)

const LoanManagement = createSlice({
    name:'loans',
    initialState:{
        NewLoans:[],
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(loanCreation.pending,(state)=>{
            state.status = 'pending'
        })
        .addCase(loanCreation.fulfilled,(state,action)=>{
            state.status = 'fulfilled'
            state.NewLoans = action.payload
        })
        .addCase(loanCreation.rejected,(state,action)=>{
            state.status ='rejected',
            state.error = action.error.message
        })
    }
})

const loanReducer = LoanManagement.reducer
export default loanReducer