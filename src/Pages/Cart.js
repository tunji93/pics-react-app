import React, {useContext} from "react"
import {Context} from "../Context/useContext"
import CartItem from "../Components/CartItem"

function Cart() {
    const {cart} = useContext(Context)
    const cartItemElements = cart.map(item => (
        <CartItem key={item.id} obj={item} />
    ))
    const totalCost = 5.99 * cart.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart