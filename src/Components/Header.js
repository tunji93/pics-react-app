import React, {useContext} from 'react'
import {Context} from '../Context/useContext'
import {Link} from 'react-router-dom'



function Header() {
    const {cart} = useContext(Context)
    const shade = ()=> {
        if(cart.length) {
            return "fill"
        }
        return "line"
    }
    return (
        <header>
            <Link to="/"><h2>Pictures in stock</h2></Link>
            <Link to="/cart"><i className={"ri-shopping-cart-"+ shade()+ " " + "ri-fw ri-2x"}></i></Link>
        </header>
    )
}

export default Header