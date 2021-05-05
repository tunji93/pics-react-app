import React from "react"

function CartItem(props) {
    return (
        <div className="cart-item">
            
            <img src={props.obj.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem