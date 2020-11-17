import React from 'react'
import { TCartItem } from '../../types'

type TCartItemProps = {
  product: TCartItem
  dispatch: Function,
}

const CartItem: React.FC<TCartItemProps> = ({ product, dispatch }) => {
  const { image, title, price, guid, quantity } = product
  return (
    <div className="cart-item">
      <img className="cart-item__picture" src={image} alt=""/>
      <div className="cart-item__title">{title}</div>
      <div className="cart-item__price">{price}</div>
      <button 
        disabled={quantity === 0}
        onClick={() => dispatch({type: 'CHANGE_PRODUCT_QUANTITY', payload: {guid, quantity: quantity - 1}})}>-</button>
      <div className="cart-item__quantity">{quantity}</div>
      <button onClick={() => dispatch({type: 'CHANGE_PRODUCT_QUANTITY', payload: {guid, quantity: quantity + 1}})}>+</button>
    </div>
  )
}

export default CartItem