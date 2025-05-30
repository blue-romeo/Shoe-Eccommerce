import React from 'react'
import './Product.css'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";


const Product = ({result}) => {
  return (
  <>
  <section className="card-container">
    {result}
  </section>

  </>
  )
}

export default Product
