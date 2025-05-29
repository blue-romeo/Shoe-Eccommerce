import React from 'react'
import './Colors.css'
import Input from '../../Components/Input'

const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Color</h2>
      <label  className="sidebar-label-container">
          <input 
          type="radio" 
          name="test3" 
          value="" 
          onChange={handleChange} 
          />
          <span className="checkmark all"> </span>All
          </label>
          
      <Input 
          type="radio" 
          name="test3" 
          color='black'
          onChange={handleChange} 
          title='Black' 
        /><Input 
          type="radio" 
          name='test3' 
          color= 'green'
          onChange={handleChange} 
          title= 'Green'
        /><Input 
          type="radio" 
          name='test3' 
          color= 'red' 
          onChange={handleChange} 
          title= 'Red' 
        /><Input 
          type="radio" 
          name="test3" 
          color= 'blue' 
          onChange={handleChange} 
          title= 'Blue'
        /><label  className="sidebar-label-container">
          <input 
          type="radio" 
          name="test3" 
          value="white" 
          onChange={handleChange} 
          />
          <span className="checkmark" style={{background: "white", border: "2px solid black"}}> </span>White
          </label>
    </div>
  )
}

export default Colors
