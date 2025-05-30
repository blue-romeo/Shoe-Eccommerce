import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, newprice, prevprice, star, reviews }) => {
  return (
    <div>
      <section className="card">
    <img src={img} alt={title}  className='card-img' />
    </section>
    <section className="card-details">
      <h3 className="card-title">{title}</h3>
      <section className="card-reviews">
      {star},{star},{star},{star}
      <span className="total-reviews">4</span>
      </section>
      <section className="card-price">
        <div className="price">
          <del>${prevprice}</del>{newprice}
        </div>
        <div className="bag">
        <BsFillBagFill />

        </div>
      </section>

    </section>
    </div>
  )
}

export default Card
