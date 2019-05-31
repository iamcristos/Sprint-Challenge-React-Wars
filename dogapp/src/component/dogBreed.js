import React from 'react'

const DogBreed = (props) =>{
    let breedName = []
    for(let dogbreed in props.props) {
        console.log(dogbreed, props[dogbreed])
        breedName.push(dogbreed)
    }
    return (
        <div>
            <select>
                {breedName.map(bread=> <option key={bread}>{bread}</option>)}
            </select>
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}

export default DogBreed