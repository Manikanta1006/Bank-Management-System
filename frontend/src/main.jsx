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
      {path:"/customer",element:<Customer/>},
      {path:"/admin",element:<Admin/>},
      {path:"/manager",element:<Manager/>}
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
