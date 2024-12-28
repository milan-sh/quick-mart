import React from 'react'

const Button = ({content}) => {
  return (
    <button className="btn min-h-0 p-2 max-h-fit border-none  hover:text-primaryButtonColor text-base">{content}</button>
  )
}

export default Button
