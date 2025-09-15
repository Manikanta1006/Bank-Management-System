import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dashboard = createAsyncThunk(
    "dashboard/fetch",
    async () => {
        const res = await axios.get("http://localhost:3004/api/typeloans/alltypeloans")
        return res.data
    }
)

export const accountsAndLoans = createAsyncThunk(
    "dashboard/fectaccoutsloans",
    async () => {
        const res = await axios.get("http://localhost:3004/api/typeloans/bargraph")
        return res.data
    }
)

export const GetAllAccounts = createAsyncThunk(
    "dashboard/getaccount",
    async()=>{
        try{
            const res = await axios.get("http://localhost:3004/api/typeloans/getallaccountsmd")
            return res.data
        }
        catch(err){
            console.log(err,"mdslice error")
        }

    }
)

const Mdashbord = createSlice({
    name: "Mdashboard",
    initialState: {
        Mdashbord: [],
        Bargraph:[],
        Allaccounts:[],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(dashboard.pending, (state) => {
                state.status = "pending"
            })
            .addCase(dashboard.fulfilled, (state, action) => {
                state.status = "fulfilled",
                    state.Mdashbord = action.payload
            })
            .addCase(dashboard.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message
            })

            .addCase(accountsAndLoans.pending,(state,action)=>{
                state.status = "pending"
            })
            .addCase(accountsAndLoans.fulfilled,(state,action)=>{
                state.status = "fulfilled"
                state.Bargraph = action.payload
            })
            .addCase(accountsAndLoans.rejected,(state,action)=>{
                state.error = action.error.message
            })
            .addCase(GetAllAccounts.pending,(state)=>{
                state.status = "pending"
            })
            .addCase(GetAllAccounts.fulfilled,(state,action)=>{
                state.status = "fulfilled"
                state.Allaccounts = action.payload
            })
            .addCase(GetAllAccounts.rejected,(state,action)=>{
                state.status = "rejected"
                state.error = action.error.message
            })

    }
})
const ManagerDashboardReducer = Mdashbord.reducer
export default ManagerDashboardReducer