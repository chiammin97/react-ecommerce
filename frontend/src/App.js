import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <Link to="/">visual oasis</Link>
              </div>
              <div className="header-links">
                  <a href="cart.html">Cart</a>
                  <a href="signin.html">Sign In</a>
              </div>
          </header>
          
          <main className="main">
              <div className="content">
                <Route path="/product/:id" component={ProductScreen}/>
                <Route path="/" exact={true} component={HomeScreen}/>
                  
              </div>
          </main>
          <footer className="footer">
              All rights reserved.
          </footer>
      </div>
      </BrowserRouter>
  );
}

export default App;
