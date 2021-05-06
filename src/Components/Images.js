import React, {useState, useContext} from "react"
import {Context} from '../Context/useContext'

function Image(props) {

    const{favorite, toggleCart, cart} = useContext(Context)

    const[hover, setHover] = useState(false)
    const Hovered = ()=> (
        setHover(true)
    )
    const notHovered = ()=> (
        setHover(false)
    )
    const size = ()=> (
        props.obj.isFavorite? "fill" : "line"
    )
    const shade = (img) => {
        const resp = cart.some(items => items.id === img.id)
        if(resp) {
            return "fill"
        }
        return "line"
    }
    
    return (
        <div className= "wide image-container"
             onMouseEnter = {Hovered}
             onMouseLeave = {notHovered}
        >
            <img src={props.obj.url} className="image-grid" alt = "images"/>
            {hover&& <i  onClick= {()=>{favorite(props.obj.id)}} className={"ri-heart-" + size() + " " + "favorite"}></i>}
            {hover&& <i onClick = {()=> {toggleCart(props.obj)}}className={"ri-add-circle-"+shade(props.obj)+ " "+ "cart"}></i>}
        </div>
    )
}

export default Image