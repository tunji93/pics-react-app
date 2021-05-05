import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function Provider(props) {
    const[photos, setPhotos] = useState([])

    const link = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <Context.Provider value={{photos}}>
           {props.children}
        </Context.Provider>
    )
}

export {Provider, Context}