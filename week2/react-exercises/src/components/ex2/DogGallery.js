import React, {useState} from 'react'
import Button from './Button'
import DogPhoto from './DogPhoto'
import uuid from 'uuid/v4'

const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    const getDogPhoto= () => {
        setLoading(true);
        return fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDogPhotos([...dogPhotos, data.message])
            setLoading(false)
        })
        .catch(err => {
            setError(true)
            setLoading(false)
        })
    }
    
    return (
        <div>
            <p>Exercise 2</p>
            <Button onClick={getDogPhoto}/>
            {isLoading && <p>Loading...</p>}
            {dogPhotos.map(dogPhoto => <DogPhoto key={uuid()} image ={dogPhoto}/>)}
            {hasError && <p>Something went wrong</p>}  
        </div>
    )
}

export default DogGallery
