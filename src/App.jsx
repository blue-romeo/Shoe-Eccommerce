import React from 'react'
import Recommended from './Recommended/Recommended'
import Navigation from './Navigation/Navigation'
import Product from './Product/Product'
import Sidebar from './Sidebar/Sidebar'
import products from './Database/Data'
import Card from './Components/Card'

const App = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const [query, setQuery] = React.useState('')

  //-------------Input Filter----------------
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  //-------------Buttons Filter----------------
  const handleSubmit = (e) => {
    setSelectedCategory(e.target.value)
  }
  //-------------Radio Filter----------------
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const filteredItems = products.filter(
    (product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  function filteredData(selected, query, products) {
    let filteredProducts = products;

    //Filtered input items
    if (query) {
      filteredProducts = filteredItems;
    }
    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newprice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newprice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, newprice, prevprice, star, reviews }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          newprice={newprice}
          prevprice={prevprice}
          star={star}
          reviews={reviews}
        />
      )
    );
  }

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