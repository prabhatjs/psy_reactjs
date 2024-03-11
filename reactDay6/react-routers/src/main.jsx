import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
//create router provider takes router,createBrowserRouter takes an array,if the header and footer are same in middle content will be change we create outlate 
const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
