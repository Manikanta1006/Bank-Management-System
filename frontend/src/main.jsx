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
         {path:"/main/maps",element:<Atmfinder/>}
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
