import React from 'react'
import { Link } from 'react-router'

const Logo = () => {
  return (
    <div className='text-3xl md:text-4xl font-bold'>
      <Link to="/">QuickMart</Link>
    </div>
  )
}

export default Logo
