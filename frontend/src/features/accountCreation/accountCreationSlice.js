import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createAccount = createAsyncThunk(
    "account/create",
    async (formdata) => {
        console.log(formdata, "fffffffff")
        const res = await axios.post("http://localhost:3004/api/account/createaccount", formdata)
        return res.data
    }
)

export const AccApprove = createAsyncThunk(
    "account/approve",
    async(id)=>{
        try{
            const res = await axios.post(`http://localhost:3004/api/account/accountapprove/${id}`)
            return res.data
        }
        catch(err){
            console.log(err,"account approve error")
        }
    }
)

export const addDocs = createAsyncThunk(
    "addimges/images",
    async (files) => {
        const formData = new FormData();

        if (files.adharCard) {
            formData.append("adharCard", files.adharCard);
        }
        if (files.panCard) {
            formData.append("panCard", files.panCard);
        }
        if (files.photo) {
            formData.append("photo", files.photo);
        }

        formData.append("userId", files.UserId);

        console.log(files, "fllflflflflflflfl")
        const res = await axios.post("http://localhost:3004/api/uploads/uploadfiles", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
        return res.data

    }
)


export const getuserfiles = createAsyncThunk(
    "files/get",
    async(id)=>{
        const res = await axios.get(`http://localhost:3004/api/uploads/getfiles/${id}`)
        console.log(res,"rererrererrssss")
        return res.data
    }
)
const accountSlice = createSlice({
    name: "Account",
    initialState: {
        Accounts: [],
        UserDocs: [],
        // ApprovedAccounts:[],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createAccount.pending, (state) => {
                state.status = "pending"
            })
            .addCase(createAccount.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.Accounts = action.payload
            })
            .addCase(createAccount.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message
            })
            builder
            .addCase(getuserfiles.pending,(state)=>{
                state.status = 'pending'
            })
            .addCase(getuserfiles.fulfilled,(state,action)=>{
                state.status = "fulfilled"
                state.UserDocs = action.payload
            })
            .addCase(getuserfiles.rejected,(state,action)=>{
                state.status = 'rejected'
                state.error =action.error.message
            })
            .addCase(AccApprove.pending,(state)=>{
                state.status = "pending"
            })
            .addCase(AccApprove.fulfilled,(state,action)=>{
                state.status = "fulfilled"
                state.Accounts = action.payload

            })
            .addCase(AccApprove.rejected,(state,action)=>{
                state.status ="rejected",
                state.error =action.error.message
            })
    },

})

const accountReducer = accountSlice.reducer
export default accountReducer;