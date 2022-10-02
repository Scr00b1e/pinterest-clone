import React from 'react'
import './button.scss'

type BtnProps = {
    btnClass: string
    btnText: string
}

const Button: React.FC<BtnProps> = ({btnClass, btnText}) => {
    return (
        <button className={btnClass}>
            {btnText}
        </button>
    )
}//nothing special
export default Button