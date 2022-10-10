import React from 'react'
import { useSelector } from 'react-redux'
import SavedItem from '../../components/savedItem/SavedItem'
import { RootState } from '../../redux/store'
import './saved.scss'

const Saved: React.FC = () => {
  const items = useSelector((state: RootState) => state.pinSlice.subjects)

  return (
    <div className='saved'>
      <h1 className='saved__title'>All pins</h1>
      <div className="saved__content">
        {
          items.map((obj) => (
            <SavedItem {...obj} key={obj.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Saved