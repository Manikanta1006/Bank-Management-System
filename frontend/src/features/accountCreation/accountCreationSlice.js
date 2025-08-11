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

const accountSlice = createSlice({
    name: "Account",
    initialState: {
        Accounts: [],
        UserDocs: [],
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
    },

})

const accountReducer = accountSlice.reducer
export default accountReducer;