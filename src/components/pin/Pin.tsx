import React from 'react'
import './pin.scss'

type PinProps = {
  type: string
  img: string
}

const Pin: React.FC<PinProps> = ({type, img}) => {
  return (
    <>
      <div className={type}>
          <img src={img} alt="" />
      </div>
      <div className="pin__author">
        <img src="https://via.placeholder.com/50" alt="" className='pin__icon'/>
      </div>
    </>
  )
}

export default Pin