import React, {useState, useContext} from "react"
import {Context} from '../Context/useContext'

function Image(props) {

    const{favorite} = useContext(Context)

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
    return (
        <div className= "wide image-container"
             onMouseEnter = {Hovered}
             onMouseLeave = {notHovered}
        >
            <img src={props.obj.url} className="image-grid"/>
            {hover&& <i  onClick= {()=>{favorite(props.obj.id)}} className={"ri-heart-" + size() + " " + "favorite"}></i>}
            {hover&& <i className="ri-add-circle-line cart"></i>}
        </div>
    )
}

export default Image