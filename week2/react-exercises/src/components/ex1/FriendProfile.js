import React from 'react'

const FriendProfile = ({title, firstname,lastname,city,postcode,streetname,country,email,phoneNumber,img}) => {
    return (
      <>
        <ul className="list">
          <li>Full Name: {title} {firstname} {lastname}</li> 
          <li>Address: {city} {postcode} {streetname}</li> 
          <li>Country: {country}</li>
          <li>Email: {email}</li>
          <li>Phone Number: {phoneNumber}</li>
        </ul>
        <img src={img} alt=""/>
        </>
    )
}

export default FriendProfile
