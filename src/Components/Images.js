import React from "react"

function Image(props) {
    return (
        <div className= "wide image-container">
            <img src={props.obj.url} className="image-grid"/>
        </div>
    )
}

export default Image