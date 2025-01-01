import React from 'react'

const Button = ({content, className=""}) => {
  return (
    <button className={`btn min-h-0 p-2 max-h-fit border-none  hover:text-primaryButtonColor text-base ${className}`}>{content}</button>
  )
}

export default Button
