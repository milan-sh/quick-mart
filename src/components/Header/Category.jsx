import React from 'react'

const Category = ({src, heading}) => {
  return (
    <button>
      <img className='h-14' src={`/categories/${src}`} alt="" />
      <h3 className='font-semibold text-gray-700'>{heading}</h3>
    </button>
  )
}

export default Category
