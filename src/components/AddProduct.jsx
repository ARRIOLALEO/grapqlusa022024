import React from 'react'
import{gql,useMutation } from "@apollo/client"

const ADD_NEW_PRODUCT = gql`
mutation addProduct($title:String!,$price:Float!,$description:String!,$categoryId:Float!,$images:[String!]!){
    addProduct(data:{
        title:$title,
        price:$price,
        description:$description,
        categoryId:$categoryId,
        images:$images
    }){
        images
    }
}
`
export const AddProduct = () => {

     const [addProduct,{loading,data,error}] = useMutation(ADD_NEW_PRODUCT,{
        variables:{
            title:"Product from the website",
            price:15.00,
            description:"Product description",
            categoryId:2,
            images:["https://placeimg.com/640/480/any"]
        }
     })
  return (
    <>
    <div>AddProduct</div>
    <button onClick={()=>addProduct()}>add a new product to the API</button>
    </>
  )
}
