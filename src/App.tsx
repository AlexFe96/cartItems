import React, { useEffect, useReducer } from 'react'
import axios, { AxiosResponse } from 'axios'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { cartKey, cartUrl, headers } from './constants'
import { TCartItem } from './types'
import CartItems from './component/CartItems/CartItems' // можно сократить добавив index.ts и будет ./component/CartItems


type TState = {
  products: Array<TCartItem>,
}

interface GetProductsActions {
  type: 'FETCH_PRODUCTS',
  payload: {
    products: Array<TCartItem>,
  }
}

interface SetQuantityAction {
  type: 'CHANGE_PRODUCT_QUANTITY',
  payload: {
    guid: string,
    quantity: number,
  }
}

const initialState = { products: [] }
function reducer(state: TState = initialState, action: GetProductsActions | SetQuantityAction): TState {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { 
        ...state,
        products: action.payload.products,
      }
    case 'CHANGE_PRODUCT_QUANTITY':
      return {
        ...state,
        products: state.products.map((item: TCartItem): TCartItem => {
          if (item.guid === action.payload.guid) item.quantity = action.payload.quantity
          return item
        }),
      }
    default:
      return state
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios.get(cartUrl, { headers })
      .then(({ data: carts }: AxiosResponse<any>) => {
        dispatch({ type: 'FETCH_PRODUCTS', payload: { products: carts[cartKey] }})
      })
  }, [])
  return (
    <div className="app">
      <CartItems products={state.products} dispatch={dispatch} />
    </div>
  )
}

export {
  App as default,
}
