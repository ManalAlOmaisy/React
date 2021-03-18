import React, {useState} from 'react'
import Button from './Button'
import FriendProfile from './FriendProfile'
import uuid from 'uuid/v4'

const Friend = () => {
    const [friend, setFriend] = useState()
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)

    const getFriend = () => {
        setLoading(true);
        return fetch("https://www.randomuser.me/api?results=1")
        .then(res => res.json())
        .then(data => {
            setFriend(data.results[0])
            setLoading(false)
        })
        .catch(err => {
            setError(true)
            setLoading(false)
        })
    }

    return (
     <div>       
        <p>Exercise 1</p>
        <Button onClick = {getFriend}/>
        {isLoading && <p>Loading...</p>}

        {friend && <FriendProfile 
            key={uuid()}
            title={friend.name.title} 
            firstname={friend.name.first} 
            lastname={friend.name.last}
            city={friend.location.city}
            postcode={friend.location.postcode}
            streetname={friend.location.street.name} 
            country={friend.location.country}
            email={friend.email}
            phoneNumber= {friend.phone}
            img={friend.picture.large}
        />}
        {hasError && <p>Something went wrong</p>}  

    </div>
    )
}

export default Friend
