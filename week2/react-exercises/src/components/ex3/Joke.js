import React from 'react'

const Joke = ({props}) => {
    return (
        <div>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    )
}

export default Joke
