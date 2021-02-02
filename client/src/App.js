import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import PostIndex from './components/posts/PostIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/user/Profile'
import User from './components/user/User'
import Footer from './components/common/Footer'

function App(){
  return (
    <BrowserRouter>
      <Nav/>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/feed" component={PostIndex}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/user/:id" component={User}/>
        </Switch>
      </AnimatePresence>
      <Footer/>
    </BrowserRouter>  
  
  )
}
export default App
