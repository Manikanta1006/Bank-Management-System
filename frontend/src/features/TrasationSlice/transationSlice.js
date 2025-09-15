import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getaccbytransation = createAsyncThunk(
    "trnsation/get",
    async(id)=>{
        console.log(id,"frontendiddidididididi")
        const res = await axios.get(`http://localhost:3004/api/transations/trasationbyacc/${id}`)
        return res.data
    }
)

export const CreateTranasation = createAsyncThunk(
    "transation/create",
    async(data)=>{
        const res = await axios.post("http://localhost:3004/api/transations/deposite",data)
        return res.data
    }
)

const getTransationbyId = createSlice({
    name:"transation",
    initialState:{
        TransationsById:[],
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getaccbytransation.pending,(state)=>{
            state.status = "pending"
        })
        .addCase(getaccbytransation.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.TransationsById = action.payload
        })
        .addCase(getaccbytransation.rejected,(state,action)=>{
            state.status ="rejected"
            state.error = action.error.message
        })
        .addCase(CreateTranasation.pending,(state)=>{
            state.status = "pending"
        })
        .addCase(CreateTranasation.fulfilled,(state,action)=>{
            state.status = "fulfilled"
            state.TransationsById = action.payload
        })
        .addCase(CreateTranasation.rejected,(state,action)=>{
            state.status = "rejected"
            state.error = action.error.message
        })
    }
})

const getTransationbyIdReducer = getTransationbyId.reducer
export default getTransationbyIdReducer