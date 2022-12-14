import React from 'react'
import Button from '../../my__UI/button/Button'

type SavedItemProps = {
    type: string
    img: string
}

export const SavedItem: React.FC<SavedItemProps> = ({ type, img }) => {
  return (
      <div className={type}>
          <img src={img} alt="" className='pin__img'/>
          <Button btnText={'Save'} btnClass={'btn'} onClickBtn={null}/>
          <p className="pin__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit obcaecati iste praesentium cum vero maiores quos soluta, repudiandae et, vitae delectus! Quisquam earum perspiciatis minima non facilis aliquid voluptatibus.
          </p>
          <div className="pin__bottom">
            <img src="./img/edit.svg" alt="edit" />
            <img src="./img/dots.svg" alt="" />
          </div>
          <div className="pin__author">
            <img src="https://via.placeholder.com/50" alt="" className='pin__icon'/>
            <h1 className='pin__name'>Just Jack</h1>
          </div>
      </div>
  )
}

export default SavedItem