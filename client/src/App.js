import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import PostIndex from './components/posts/PostIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/user/Profile'
import User from './components/user/User'

function App(){
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/feed" component={PostIndex}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/user/:id" component={User}/>
      </Switch>
    </BrowserRouter>  
  
  )
}
export default App
