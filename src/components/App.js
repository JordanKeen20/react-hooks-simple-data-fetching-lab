import React,{ useEffect, useState } from 'react'
// create your App component here

function App(){
    const [dogs, setDogs] = useState(null)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                setDogs(data.message)
            })
    },[])

    if(!dogs){
        return <p>"Loading please wait..."</p>
    }

 return(
    <div>
        <h2>Here is a wonderful Dog for you!</h2>
        <img src = {dogs} alt = 'Random Dog'></img>
    
    </div>
 )

}


export default App;