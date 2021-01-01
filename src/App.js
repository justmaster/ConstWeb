import './App.css';
import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
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
