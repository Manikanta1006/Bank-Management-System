import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice/authSlice";
import accountReducer from "../features/accountCreation/accountCreationSlice";
import userAccountReducer from "../features/UserSlice/UserwithAccountSlice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
        account:accountReducer,
        useraccount:userAccountReducer
    }
})