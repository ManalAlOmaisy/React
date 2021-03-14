import React from 'react'
import Count from './Count'
import Button from './Button'
import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    function increment(){
        setCount(count=> count + 1)
    }
    const feedback = (count > 10 ? "It's higher than 10!" : "Keep counting...")
    return (
        <div>
            <Button onClick={increment}/>
            <Count count={count}/>
            <p>{feedback}</p>
        </div> 
    )
}
export default Counter
