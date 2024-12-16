import React from 'react'
import { Nav, CategoriesSection, Banner, Hero, Footer } from './components'

function App() {
  return (
    <div className='font-roboto bg-primaryBg'>
      <Nav/>
      <CategoriesSection/>
      <Banner/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
