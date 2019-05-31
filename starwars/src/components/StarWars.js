import React from 'react'
import './StarWars.css'
const StarWars = ({props})=>{
    return (
        <div className='StarWars'>
           {props.map(starwars=>(
               <li key={starwars.name}>{starwars.name}</li>
           ))}
        </div>
    )
}

export default StarWars;