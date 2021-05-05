import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function Provider(props) {
    const[photos, setPhotos] = useState([])
    const [cart, setCart] = useState([])

    const link = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    const favorite = (id) => {
        const updated = photos.map((photo)=> {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }

            return photo
        })

        setPhotos(updated)
    }

    const addCart = (img) => {
        setCart(prev => [...prev , img])
    }

    return (
        
        <Context.Provider value={{photos, favorite, addCart, cart}}>
           {props.children}
        </Context.Provider>
    )
}

export {Provider, Context}