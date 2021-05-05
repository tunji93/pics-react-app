
import React, {useContext} from 'react'

import Image from '../Components/Images'

import {Context} from '../Context/useContext'


function Photos() {
    
    const {photos} = useContext(Context)
    const allPhotos = photos.map((photo,i)=> <Image obj={photo} key={photo.id} />)

    return (
        <main className="photos">
            {allPhotos}
        </main>

    )
}

export default Photos