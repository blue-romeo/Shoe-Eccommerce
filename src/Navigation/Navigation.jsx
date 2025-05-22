import React from 'react'
import './Navigation.css'
import { FiHeart } from 'react-icons/fi'  
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navigation = () => {
  return (
    <nav>
    <div className="nav-container">
      <input type='text' className='search-input' placeholder='Enter your search shoes.'/>
      
    </div>
    <div className="profile-container">
      <a href="#" >
      <AiOutlineUser />
      </a>
      <a href='#'>
      <FiHeart />
      </a>
      <a href='#'>
      <AiOutlineShoppingCart /> 
      </a>
    </div>
    </nav>
  )
}

export default Navigation
