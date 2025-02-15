import React from 'react'

const Button = ({children, onClick, className=""}) => {
  return (
    <button onClick={onClick} className={`btn min-h-0 p-2 max-h-fit border-none  hover:text-primaryButtonColor text-base ${className}`}>{children}</button>
  )
}

export default Button
