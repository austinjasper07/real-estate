import React from 'react';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import About from '../pages/About';
import Profile from '../pages/Profile';

export default function App() {
    return (
      <BrowserRouter>
        <Router>
            <Route path='/' element ={<Home />} />
            <Route path='/sign-in' element ={<SignIn />} />
            <Route path='/sign-up' element ={<SignUp />} />
            <Route path='/about-us' element ={<About />} />
            <Route path='/profile' element ={<Profile />} />
        </Router>
      </BrowserRouter>
    )
  }