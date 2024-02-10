import {useQuery,gql} from '@apollo/client'
const QUERY_CHARACTERS =gql`query{
    characters{
    results{
        name
        status
        image
        location{
        name
        type
        dimension
        }
    }
    }
}`
export const useGetCharacters = () =>{
    const {data , loading, error} = useQuery(QUERY_CHARACTERS)
    return [data, loading, error]
}