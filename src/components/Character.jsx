import React from 'react'
import { useQuery,gql } from '@apollo/client';

const QUERY_CHARACTER =  gql`query GetCharacter($id:ID!){
    character(id:$id){
      name
      id
      image
      episode{
        name
        characters{
          name
        }
      }
    }
}`

export const Character = () => {
    const {data, loading, error} = useQuery(QUERY_CHARACTER,{
        variables: {id:3}
    })
    if(loading) return <>meyday im loading ..........</>
    if(error) return <>we have an error Mother Tower</>
    
  return (
    <>
    <div>Character</div>
    <img src={data.character.image}  alt={data.character.name}/>
    <h2>{data.character.name}</h2>
    </>
  )
}
