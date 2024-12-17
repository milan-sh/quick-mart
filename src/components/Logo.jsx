import React from 'react'

const Logo = ({className=""}) => {
  return (
    <div className={`flex items-center gap-x-1 ${className}`}>
      <img src="./logo.jpg" className='md:h-10 h-8 rounded-md' alt="" /> 
      <h1 className='font-semibold md:text-2xl text-xl text-border'>Quick Mart</h1>
    </div>
  )
}

export default Logo
