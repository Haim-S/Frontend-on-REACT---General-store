import React,{useState} from 'react'
import "./shopping.css";

import { UseContextControllers } from '../../context/contextController';
import TableRow from './tableRow.js/TableRow';
import { formatPrice } from '../../utils/CalculateAndWritePrice';



const ShoppingCart = () => {
  const cart = UseContextControllers().cart;
  const editQuantity = UseContextControllers().editQuantity;
  const deleteOne = UseContextControllers().deleteOne;

  

const totalPriceItems = cart.reduce((sum, item) => sum + item.TotalPrice, 0);


 
  return (
    
    <>
    
  <table>
  <tr>
  <th>Num</th>
  <th>Product</th>
  <th>Unit Price</th>
  <th>Quantity</th>
  <th>Total Price</th>
  <th>Actions</th>
  </tr>
  {cart.map((products, index) => (
    <TableRow key={index} products={products} editQuantity={editQuantity} deleteOne={deleteOne}/>
  ))}
  
</table>
<div className='TheBill'>
  <button className='BtnClearCart'>CLEAR CART</button>
  
  <div>
    <p>Total ({cart.length}) items: <span className='paragraphTotalPrice'>{formatPrice(totalPriceItems)}</span></p>
    <button className='BtnCheckOut' >Check Out</button>
  </div>
</div>
    </>
  )
}

export default ShoppingCart