import React from 'react'
import './Colors.css'

const Colors = () => {
  return (
    <div>
      <h2>Color</h2>
      <label  className="color-title">
          <input type="radio" name='test2' />
          <span className="checkmark"></span>All
        /</label>
        <label  className="color-title">
          <input type="radio" name='test2' />
          <span className="checkmark"></span>Black
        </label>
        <label  className="color-title">
          <input type="radio" name='test2' />
          <span className="checkmark"></span>White
        </label>
        <label  className="color-title">
          <input type="radio" name='test2' />
          <span className="checkmark"></span>Red
        </label>
        <label  className="color-title">
          <input type="radio" name='test2' />
          <span className="checkmark"></span>Blue
        </label>
    </div>
  )
}

export default Colors
