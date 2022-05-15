
import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import  Cart  from './Cart';
import { useStateContext} from '../context/StateContext';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link  href="/">The Shelf Store</Link>
      
      </p>
      <h1 className='text1'>
        Decoratives
      </h1 >
      <h1 className='text2'>
        Mugs 
      </h1>
      <h1 className='text3'>
        Plates
      </h1>
      <h1 className='text4'>About Us</h1>
      
    

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar