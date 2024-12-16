import React from 'react'
import Category from './Category'

const CategoriesSection = () => {
  return (
    <div className='bg-white m-4 p-4 flex items-center justify-around'>
      <Category
      src="groceries.jpg"
      heading="Grocery"
      />
      <Category
      src="beauty.webp"
      heading="Beauty"
      />
      <Category
      src="fragrance.jpg"
      heading="Fragrance"
      />
      <Category
      src="fashion.webp"
      heading="Fashion"
      />
      <Category
      src="kitchen.jpg"
      heading="Kitchen"
      />
      <Category
      src="electronics.jpg"
      heading="Electronics"
      />
      <Category
      src="furniture.jpg"
      heading="Furniture"
      />
      <Category
      src="decoration.jpg"
      heading="Decoration"
      />
    </div>
  )
}

export default CategoriesSection
