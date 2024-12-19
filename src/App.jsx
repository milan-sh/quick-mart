import React from 'react'
import { Nav, CategoriesSection, Banner, Hero, Footer } from './components'
import Products from './pages/Products'

function App() {
  return (
    <div className='font-roboto bg-primaryBg'>
      <Nav/>
      <Products/>
      <CategoriesSection/>
      <Banner/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
