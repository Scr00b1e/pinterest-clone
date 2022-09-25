import React from 'react'
import './pin.scss'

type PinProps = {
  type: string
  img: string
}

const Pin: React.FC<PinProps> = ({type, img}) => {
  return (
      <div className={type}>
          <img src={img} alt="" className='pin__img'/>
          <p className="pin__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit obcaecati iste praesentium cum vero maiores quos soluta, repudiandae et, vitae delectus! Quisquam earum perspiciatis minima non facilis aliquid voluptatibus.
          </p>
          <div className="pin__author">
            <img src="https://via.placeholder.com/50" alt="" className='pin__icon'/>
            <h1 className='pin__name'>Just Jack</h1>
          </div>
      </div>
  )
}

export default Pin