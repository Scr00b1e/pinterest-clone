import React from 'react'
import './button.scss'

type BtnProps = {
    btnClass: string
    btnText: string
    onClickBtn: any
}

const Button: React.FC<BtnProps> = ({btnClass, btnText, onClickBtn}) => {
    return (
        <button className={btnClass} onClick={onClickBtn}>
            {btnText}
        </button>
    )
}//nothing special
export default Button