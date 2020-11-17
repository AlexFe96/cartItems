import React, { useMemo} from "react";
import axios from 'axios'
import CartItem from './CartItem'
import { TCartItem } from '../../types'
import { cartKey, cartUrl, headers, chatUrl, closeUrl, chatPayload } from '../../constants'

const conformOrder = (products: Array<TCartItem>): void => {
    const cartPayload = {
        [cartKey]: products
    }
    axios.post(cartUrl, cartPayload, { headers })
      .then(() => {
          axios.post(chatUrl, chatPayload, { headers })
            .then(() => {
              window.location.replace(closeUrl)
            })
      })
}

type TCartItemsProps = {
    products: Array<TCartItem>,
    dispatch: Function,
}

const CartItems: React.FC<TCartItemsProps> = ({ products, dispatch }) => {
    console.log('products', products)
    const total = useMemo(() => products.reduce(
      (price, item) => price + item.price * item.quantity,
      0,
    ), [products])
    return (
      <React.Fragment>
          <div className="cart-items">
            <div className="cart-items__total">Total: {total}</div>
            {products.map((item) => <CartItem product={item} key={item.guid} dispatch={dispatch} />)}
          </div>
          <button onClick={() => conformOrder(products)}>Оформить заказ</button>
      </React.Fragment>
    )
}

export default CartItems