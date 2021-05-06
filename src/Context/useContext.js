import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function Provider(props) {
    const[photos, setPhotos] = useState([])
    const [cart, setCart] = useState([])
    const [order, setOrder] = useState(true)

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

    const toggleCart = (img) => {
        const check = cart.some(items => items.id === img.id)
        
        if(check) {
            const update = cart.filter((item)=> item.id !== img.id)
            setCart(update)
        }

        else {
            setCart(prev=> setCart([...prev, img]))
        }
    }

    const emptyCart = () => {

        if(cart.length) {
        setOrder(false)
        setTimeout(()=> {
            setCart([])
            setOrder(true)
        }, 3000)
        }
        return 
        
    }

    

    return (
        
        <Context.Provider value={{photos, favorite, toggleCart, emptyCart, cart, order}}>
           {props.children}
        </Context.Provider>
    )
}

export {Provider, Context}