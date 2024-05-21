import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsDeteails = () => {
  let [singleData, setSingleData] = useState([])
  let productId = useParams()

  let getData = () =>{
    axios.get( `https://dummyjson.com/products/${productId.id}`).then((response)=>{
      setSingleData(response.data);
    })
  }

  useEffect(()=>{
    getData()
  },[])

  console.log(singleData);

  return (
    <div>ProductsDeteails</div>
  )
}

export default ProductsDeteails