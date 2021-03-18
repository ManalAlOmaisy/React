import React from 'react'

const DogPhoto = ({image, index}) => {
    return (
        <div key ={index}>
            <img src={image} alt="dog"/>
        </div>
    )
}

export default DogPhoto
