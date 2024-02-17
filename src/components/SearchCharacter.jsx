import React,{useState} from 'react'
import {useLazyQuery,gql,useMutation} from '@apollo/client'

const CHARACTER_TO_SEARCH = gql`query SearchCharacter($name:String!){
    characters(filter:{name:$name}){
        results{
            name
            image
            id
        }
    }
}`

export const SearchCharacter = () => {
    const [characterToSearch,setCharacterToSearch] = useState("")
    const [searchCharacter,data] = useLazyQuery(CHARACTER_TO_SEARCH,{
        variables:{
            name:characterToSearch
        }
    })
    
  return (
    <>
    <div>SearchCharacter</div>
    <input type="text" value={characterToSearch} onChange={(e)=>setCharacterToSearch(e.target.value) }/>
    <button onClick={()=>searchCharacter()}>Search</button>
    </>
  )
}
