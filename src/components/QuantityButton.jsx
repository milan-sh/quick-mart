import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const QuantityButton = () => {

    const [quantity, setQuantity] = useState(1)
    
    const handleMinus=()=>{
        if(quantity===1) return
        setQuantity(quantity-1)
    }
  return (
    <div className='flex justify-between items-center gap-x-4 w-fit border border-gray-200 rounded-lg'>
      <button onClick={handleMinus} className='px-4 py-1 text-grayColor'><FontAwesomeIcon icon={faMinus} /></button>
      <p>{quantity}</p>
      <button onClick={()=>{setQuantity(quantity+1)}} className='px-4 py-1 text-gray-'><FontAwesomeIcon icon={faPlus} /></button>
    </div>
  )
}

export default QuantityButton
