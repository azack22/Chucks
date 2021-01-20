import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';


function Main(props) {
    const [jokes, setJokes] = useState ()
    const getJoke = async () => {
        const response = await fetch('https://api.icndb.com/jokes/random')
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        setJokes(jsonResponse)
    } 
    useEffect (()=> {
        
        getJoke()
;
    }, [])
    return (
        <div 


        
        
        >
            <h3>Chuck Norris Joke's</h3>


            
            <h1>{jokes && jokes.value.joke}</h1>
            

            <button id= 'NextButton' onClick= {getJoke}> 
            <h4>Another One!</h4>
            </button>
           
           
        </div>
    );
}

export default Main;