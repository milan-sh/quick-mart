import React from 'react'

const HeadingCard = ({category, link=null, className="", size, linkSize}) => {
  return (
    <div className={`flex items-center justify-between md:items-center gap-y-2 rounded-lg md:p-3 p-4 bg-gray-200 ${className}`}>
      <h1 className={`text-2xl  font-semibold ${size}`}>{category}</h1>
      {link && <a className={`link md:text-lg  hover:text-primaryButtonColor text-xs ${linkSize}`}>{link}</a>}
    </div>
  )
}

export default HeadingCard
