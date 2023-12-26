import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AppBar from './components/AppBar'
import {RecoilRoot, useRecoilState} from "recoil"
import Login from './components/Login'
import { savedCourseState } from './store/atoms/savedCourses'
import axios from "axios"
import SignUp from './components/SignUp'
function App() {
  return (
    <RecoilRoot>
      <Router>
        <InitUser/>
        <AppBar></AppBar>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/signin"} element={<Login/>}/>
          <Route path={"/signup"} element={<SignUp/>}/>
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

function InitUser(){
  const [savedCourses, setSavedCourses] = useRecoilState(savedCourseState);
    
return <>
</>
}
export default App
