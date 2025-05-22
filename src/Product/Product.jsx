import React from 'react'
import './Product.css'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

const Product = () => {
  return <>
  <section className="card-container">
    <section className="card">
      <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="shoe" />
    </section>
    <section className="card-details">
      <h3 className="card-title">Shoe</h3>
      <section className="card-reviews">
      <AiFillStar className='ratings-star'/><AiFillStar className='ratings-star'/><AiFillStar className='ratings-star'/><AiFillStar className='ratings-star'/>
      <span className="total-reviews">4</span>
      </section>
      <section className="card-price">
        <div className="price">
          <del>$300</del>200
        </div>
        <div className="bag">
        <BsFillBagFill />

        </div>
      </section>

    </section>
  </section>

  </>
}

export default Product
