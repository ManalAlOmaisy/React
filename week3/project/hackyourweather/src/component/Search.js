import React from 'react'
import '../search.css'


const Search = ({value, onChange,handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            
            <input className="inputdata" 
                type= "text"
                name="cityName"
                placeholder="Enter City"
                value={value}
                onChange={onChange}
            />
            <button type="submit" className="btn" disabled={!value && true}> Get Weather</button>
        </form>
    )
}
export default Search