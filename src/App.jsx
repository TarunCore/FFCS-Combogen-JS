import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AppBar from './components/AppBar'
import {RecoilRoot} from "recoil"
function App() {
  return (
    <RecoilRoot>
      <Router>
        <AppBar></AppBar>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
