import React from 'react'
import './Sidebar.css'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import Category from './Category/Category'
import { CiShoppingCart } from "react-icons/ci";

const Sidebar = ({handleChange}) => {
  return <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>
                <CiShoppingCart />
            </h1>
        </div>
        <Category handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        <Price handleChange={handleChange} />
    </section>
  </>
}

export default Sidebar