import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../my__UI/button/Button'
import { ItemsProps } from '../../pages/Home'
import { addItem } from '../../redux/slices/pinSlice'
import './pin.scss'

type PinProps = {
  type: string
  img: string
  id: string
}

const Pin: React.FC<PinProps> = ({type, img, id}) => {
  //redux
  const dispatch = useDispatch()
  //react
  const [isClicked, setIsClicked] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const onClickBtn = () => {
    const item: ItemsProps = {
      id,
      type,
      img,
      count: 0
    }
    dispatch(addItem(item))
    setIsClicked(!isClicked)
  }
  const onClickChange = () => {
    setIsOpen(!isOpen)
  }

  return (
      <div className={type}>
          <img src={img} alt="" className='pin__img'/>
          <div className="pin__save">
            <span className="pin__change" onClick={onClickChange}>
              Saved
            </span>
            <Button 
            btnText={'Save'} 
            btnClass={isClicked ? 'btn clicked' : 'btn'} 
            onClickBtn={onClickBtn}/>
          </div>
          <div 
          className={isOpen ? 'pin__board pin__board--click' : 'pin__board'} >
            <h1>Save to board</h1>
            <div className="pin__board-items">
              <div>
                <img src="https://via.placeholder.com/50" alt="" />
                some thing
              </div>
              <Button 
              btnClass={'board'}
              btnText={'Save'}
              onClickBtn={onClickBtn}/>
            </div>
            <div className="pin__board-footer">
              <svg className="gUZ R19 U9O kVc" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
              </svg>
              create board
            </div>
          </div>
          <p className="pin__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit obcaecati iste praesentium cum vero maiores quos soluta, repudiandae et, vitae delectus! Quisquam earum perspiciatis minima non facilis aliquid voluptatibus.
          </p>
          <div className="pin__bottom">
            <a href="#">image link</a>
            <div>
              <img src="./img/edit.svg" alt="edit" />
              <img src="./img/dots.svg" alt="" />
            </div>
          </div>
          <div className="pin__author">
            <img src="https://via.placeholder.com/50" alt="" className='pin__icon'/>
            <h1 className='pin__name'>Just Jack</h1>
          </div>
      </div>
  )
}

export default Pin