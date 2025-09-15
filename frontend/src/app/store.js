import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice/authSlice";
import accountReducer from "../features/accountCreation/accountCreationSlice";
import userAccountReducer from "../features/UserSlice/UserwithAccountSlice";
import getTransationbyIdReducer from "../features/TrasationSlice/transationSlice";
import loanReducer from "../features/LoanCreation/LoanCreation";
import ManagerDashboardReducer from "../features/ManagerDashboard/MdSlice";
 
export const store = configureStore({
    reducer:{
        auth:authReducer,
        account:accountReducer,
        useraccount:userAccountReducer,
        Transations:getTransationbyIdReducer,
        loan:loanReducer,
        ManagerDashboard:ManagerDashboardReducer
    }
})