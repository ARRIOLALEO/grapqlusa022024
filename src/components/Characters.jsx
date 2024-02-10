import React from 'react'
import { useGetCharacters } from '../hooks/useGetCharacters'

export const Characters = () => {

    const [data,loading,error] = useGetCharacters()
    
    if(loading) return <>meyday im loading ..........</>
    if(error) return <>we have an error Mother Tower</>
  return (
    <>
    <div>Characters</div>
    {data.characters.results.map(character=>{
        return(<div>
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
        </div>)
    })}
    </>
  )
}
