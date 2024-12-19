import React from 'react'


const Button = ({bgColor, className="", children, ...props}) => {
  return (
    <button className={`text-white py-4 px-8 font-semibold inline-flex items-center justify-center gap-x-2 ${bgColor} ${className}`} {...props}>{children}</button>
  )
}

export default Button
