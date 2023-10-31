import React from 'react'
import { useParams } from 'react-router-dom'

const ProductsInfo = () => {
    const params = useParams()
  return (
    <>
    <div>ProductsInfo</div>
    <h3>You are currently viewing Item {params.id}</h3>
    </>
  )
}

export default ProductsInfo