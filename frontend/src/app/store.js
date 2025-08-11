import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice/authSlice";
import accountReducer from "../features/accountCreation/accountCreationSlice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
        account:accountReducer
    }
})