import axios from 'axios'
import React from 'react'
import Pin from '../../components/pin/Pin'
import './saved.scss'

type SavedProps = {
  img: string
  type: string
  id: number
}

const Saved: React.FC = () => {
  const [items, setItems] = React.useState([]) 

  const things = items.map((obj: SavedProps) => (
    <Pin {...obj} key={obj.id}/>
  ))

  React.useEffect(() => {
    axios.get('https://632c5cb61aabd837399a579d.mockapi.io/practice/pins')
    .then((res) => {
      setItems(res.data)
    })
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='saved'>
      <div className="saved__content">
        {
          things
        }
      </div>
    </div>
  )
}

export default Saved