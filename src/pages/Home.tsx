import axios from 'axios'
import React from 'react'
import Pin from '../components/pin/Pin'
import './home.scss'

type ItemsProps = {
  id: number
  type: string
  img: string
}

const Home: React.FC = () => {
  const [items, setItems] = React.useState([]) 

  const things = items.map((obj: ItemsProps) => (
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
    <div className='home'>
        <div className="home__content">
            {
              things
            }
        </div>
    </div>
  )
}

export default Home