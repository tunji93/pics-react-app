import React from 'react'
import {Link} from 'react-router-dom'



function Header() {
    return (
        <header>
            <Link to="/"><h2>Pictures in stock</h2></Link>
            <Link to="/cart"><button>Cart</button></Link>
        </header>
    )
}

export default Header