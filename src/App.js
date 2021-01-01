import './App.css';
import React, {useRef} from "react";
import {TweenMax, Power3} from 'gsap'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/home'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
        <Route path="/home" component={Home} />
    </BrowserRouter>

  );
}

export default App;
