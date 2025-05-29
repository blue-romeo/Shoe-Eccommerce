import React from 'react'
import './Price.css'
import Input from '../../Components/Input'

const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title">Price</h2>
      <label  className="sidebar-label-container">
          <input 
          type="radio" 
          name="test2" 
          value="" 
          onChange={handleChange} 
          />
          <span className="checkmark"> </span>All
          </label>
          
      <Input 
          type="radio" 
          name="test2" 
          value={50} 
          onChange={handleChange} 
          title="$0-$50" 
        /><Input 
          type="radio" 
          name="test2" 
          value= {100} 
          onChange={handleChange} 
          title="$50-$100" 
        /><Input 
          type="radio" 
          name="test2" 
          value={150} 
          onChange={handleChange} 
          title="$150-$200" 
        /><Input 
          type="radio" 
          name="test2" 
          value= {200} 
          onChange={handleChange} 
          title="Over $200" 
        />
    </div>
  )
}

export default Price
