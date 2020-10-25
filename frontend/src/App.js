import React from 'react';
import data from './data';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <a href="index.html">visual oasis</a>
              </div>
              <div className="header-links">
                  <a href="cart.html">Cart</a>
                  <a href="signin.html">Sign In</a>
              </div>
          </header>
          
          <main className="main">
              <div className="content">
                <Route path="/products/:id" component={ProductScreen}/>
                <Route path="/" exact={true} compomnent={HomeScreen}/>
                  <ul className="products">
                    {data.products.map(product => 
                    <li>
                          <div className="product">
                              <img className="product-image" src={product.image} alt="product image"/>
                              <div className="product-name">
                                  <a href="product.html">{product.name}</a>
                              </div>
                              <div className="product-description">{product.description}</div>
                              <div className="product-size">{product.size}</div>
                              <div className="product-price">${product.price}</div>
                          </div>
                      </li>)
                    }
                      
                  </ul>
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
