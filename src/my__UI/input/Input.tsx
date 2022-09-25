import React from 'react'
import './input.scss'

type InputProps = {
  inputClass: string
  inputP: string
}

const Input: React.FC<InputProps> = ({inputClass, inputP}) => {
  return (
    <div className='input__block'>
      <img src="./img/search.svg" alt="" />
      <input type="text" className={inputClass} placeholder={inputP}/>
    </div>
  )
}

export default Input