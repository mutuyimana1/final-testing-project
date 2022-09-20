import React from 'react'
import Home from '../views/home'
import {Routes, Route} from "react-router-dom"
function Index() {
  return (
    <Routes>

        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default Index
