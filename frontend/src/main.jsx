import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Register from './Pages/Register/Register.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import Customer from './Pages/Cutomer/Customer.jsx'
import Admin from './Pages/Admin/Admin.jsx'
import Manager from './Pages/Manager/Manager.jsx'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import UserDashboard from './Components/UserDashboard/UserDashboard.jsx'
import AccountCreation from './Pages/AccountCreation/AccountCreation.jsx'
import Account from './Pages/Account/Account.jsx'
import Atmfinder from './Pages/ATM finder/Atmfinder.jsx'
import Alltransation from './Pages/Alltransations/Alltransation.jsx'
import ManagerDashBoard from './Components/ManagerDashBoard/ManagerDashBoard.jsx'
import ManagerSidebar from './Components/Managersidebar/ManagerSidebar.jsx'
import LoanCreation from './Pages/LoanCreation/LoanCreation.jsx'
import Customers from './Pages/Customers/Customers.jsx'
import DepositeMoney from './Pages/DepositeMoney/DepositeMoney.jsx'
import AccountApproves from './Pages/AccountApproves/AccountApproves.jsx'
import LoanApproves from './Pages/LoanApproves/LoanApproves.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login/>
      },

      {path:"/register",element:<Register/>},
 
      {path:"/main",element:<Sidebar/>,

        children:[
         {path:"/main/customer",element:<UserDashboard/>},
         {path:"/main/createaccount",element:<AccountCreation/>},
         {path:"/main/account",element:<Account/>},
         {path:"/main/maps",element:<Atmfinder/>},
         {path:"/main/transations",element:<Alltransation/>},
         {path:"/main/loan",element:<LoanCreation/>}
        //  {path:"/main/manager",element:<ManagerDashBoard/>}
        ]

      },
      {path:"/manager",element:<ManagerSidebar/>,

        children:[
          {path:"/manager/dashboard",element:<ManagerDashBoard/>},
          {path:"/manager/customers",element:<Customers/>},
          {path:"/manager/deposite",element:<DepositeMoney/>},
          {path:"/manager/accountapproves",element:<AccountApproves/>},
          {path:"/manager/loansapproves",element:<LoanApproves/>}
        ]

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
