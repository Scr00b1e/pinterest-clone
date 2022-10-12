import axios from 'axios'
import React from 'react'
import Loader from '../components/loader/Loader'
import Pin from '../components/pin/Pin'
import './home.scss'

export type ItemsProps = {
  id: number
  type: string
  img: string
  count: number
}

const Home: React.FC = () => {
  const [items, setItems] = React.useState([]) 
  const [isLoading, setIsLoading] = React.useState(false)

  const things = items.map((obj: ItemsProps) => (
    <Pin {...obj} key={obj.id}/>
  ))

  React.useEffect(() => {
    setIsLoading(true)
    axios.get('https://632c5cb61aabd837399a579d.mockapi.io/practice/pins')
    .then((res) => {
      setItems(res.data)
      setIsLoading(false)
    })
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='home'>
        <div className="home__content">
            {
              isLoading ? <Loader/> : things
            }
        </div>
    </div>
  )
}

export default Home