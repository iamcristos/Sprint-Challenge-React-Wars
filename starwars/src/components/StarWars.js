import React from 'react'
import './StarWars.css'
const StarWars = ({props})=>{
    return (
        <div className='StarWars'>
           {props.map(starwars=>(
               <ul key={starwars.name}>
                   <h2 >{starwars.name}</h2>
                   <p> height: {starwars.height}</p>
                   <p> mass: {starwars.mass}</p>
                   <p> hair Color: {starwars.hair_color}</p>
               </ul>
               
           ))}
        </div>
    )
}

export default StarWars;