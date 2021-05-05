import React from 'react'
import './App.css';
import Header from './Components/Header'
import Photos from './Pages/Photos'
import Cart from './Pages/Cart'
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      
      
      <Switch>
        <Route exact path="/">
          <Photos />

        </Route>
        <Route path="/cart">
           <Cart />
        </Route>

      </Switch>
    </>
  );
}

export default App;
