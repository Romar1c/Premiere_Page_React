import React from 'react';
import { useState, useEffect } from 'react'
import '../assets/styles/App.css';
import Banner from './banner';
import Cart from './Cart';
import {ShoppingListe} from './shopping_list';
import Footer from './footer';

function App() {
  const titre = "La maison des plantes"

  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <React.StrictMode>
      {Banner(titre)}
       <div className='lmj-layout-inner'>
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingListe cart={cart} updateCart={updateCart} />
        </div>
      <Footer/>
    </React.StrictMode>
  );
}

export default App;
