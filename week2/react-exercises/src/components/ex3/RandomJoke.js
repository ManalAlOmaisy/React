import React , {useState, useEffect} from 'react'
import bytesToUuid from 'uuid/lib/bytesToUuid';
import Joke from './Joke';
import uuid from 'uuid/v4'

const RandomJoke = () => {

    const [joke, setJoke] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            setJoke(data)
            setLoading(false) 
        })
        .catch(err => {
            setError(true)
            setLoading(false)
        }) ;
    }, []);

    return (
        <div>
            <p>Exercise 3</p>
            {isLoading && <p>Loadding.....</p>}
            {!hasError &&  <Joke props={joke} key={uuid()}/> }
            {hasError && <p>Something went wrong</p>} 
        </div>
    )
}

export default RandomJoke
