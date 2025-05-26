import React from 'react'
import Recommended from './Recommended/Recommended'
import Navigation from './Navigation/Navigation'
import Product from './Product/Product'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Sidebar />       
      <Navigation />
      <Recommended />
      <Product />
    </div>
  )
}

export default App