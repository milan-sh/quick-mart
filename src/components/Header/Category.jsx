import React from 'react'

const Category = ({src, heading}) => {
  return (
    <button className='flex flex-col justify-center items-center'>
      <img className='md:h-14 h-10' src={`/categories/${src}`} alt="" />
      <h3 className='md:font-semibold text-xs md:text-base text-gray-700'>{heading}</h3>
    </button>
  )
}

export default Category
