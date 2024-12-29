import React from 'react'

const HeadingCard = ({category, link=null}) => {
  return (
    <div className='flex md:flex-row flex-col justify-between md:items-center gap-y-2 rounded-lg md:p-3 p-4 bg-gray-200'>
      <h1 className='text-2xl  font-semibold'>{category}</h1>
      {link && <a className="link md:text-lg text-xl hover:text-primaryButtonColor">{link}</a>}
    </div>
  )
}

export default HeadingCard