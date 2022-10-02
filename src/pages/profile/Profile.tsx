import React from 'react'
import Button from '../../my__UI/button/Button'
import './profile.scss'

const Profile: React.FC = () => {
  return (
    <div className='profile'>
        <div className="profile__info">
            <img src="https://via.placeholder.com/150" alt="" className='profile__icon'/>
            <h1 className="profile__title">
                Just Jack
            </h1>
            <span className='profile__nickname'>@scr00b1e</span>
            <div className="profile__follow">
                <h1>0</h1> <p>following</p>
            </div>
            <div className="profile__buttons">
                <Button btnClass={'btn grey'} btnText={'Share'}/>
                <Button btnClass={'btn grey'} btnText={'Edit Profile'}/>
            </div>
        </div>
        <div className="profile__bottom">
            <div className="profile__tab">
                <h1 className="profile__created title">Created</h1>
                <h1 className="profile__saved title">Saved</h1>
            </div>
        </div>
    </div>
  )
}

export default Profile