import React from 'react'
import './Category.css'
import Input from '../../Components/Input'

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label  className="sidebar-label-container">
          <input 
          type="radio" 
          name="test" 
          value="" 
          onChange={handleChange} 
          />
          <span 
          className="checkmark" > </span>All
            
            
        </label>
       <Input 
          type="radio" 
          name="category" 
          value="flats" 
          onChange={handleChange} 
          title="Flats" 
        /><Input 
          type="radio" 
          name="category" 
          value="sandals" 
          onChange={handleChange} 
          title="Sandals" 
        /><Input 
          type="radio" 
          name="category" 
          value="sneakers" 
          onChange={handleChange} 
          title="Sneakers" 
        /><Input 
          type="radio" 
          name="category" 
          value="heels" 
          onChange={handleChange} 
          title="Heels" 
        />
      </div>
    </div>
  )
}

export default Category
