import './App.css'
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom'
// import DashBoard from './components/DashBoard'
// import MainPage from './components/MainPage'
import { Suspense, lazy } from "react";
import AppBar from './AppBar'
import React from 'react'
const DashBoard =lazy(()=>import("./components/DashBoard"));
const MainPage=lazy(()=>import("./components/MainPage"));
function App() {
 
  return (
    // parent component is browserRouter and all is children component
<div>
  <BrowserRouter>   
  <AppBar/>
    <Routes>
      <Route path='/dashboard' element={
        <Suspense >
           <DashBoard/>
        </Suspense> 
      } />
      <Route path='/' element={
        <Suspense>  <MainPage/></Suspense>
    } />
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
