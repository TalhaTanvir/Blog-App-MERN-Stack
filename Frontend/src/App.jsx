import React from 'react'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import { RouteIndex, RouteSignIn, RouteSignUp } from './helpers/RouteName'
import Index from './pages'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'


function App() {
  return (
    <Routes>
      <Route path={RouteIndex} element={<Layout/>}>
      <Route index element={<Index/>}/>
      </Route>
      <Route path={RouteSignIn} element={<Signin/>}/>
      <Route path={RouteSignUp} element={<SignUp/>}/>
    </Routes>
  )
}

export default App