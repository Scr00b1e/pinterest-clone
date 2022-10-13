import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './pinInfo.scss'

const PinInfo: React.FC = () => {
    
    const [data, setData] = React.useState<{
        img: string
    }>()
    const { id } = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        async function fetchPin() {
            try {
                const {data} = await axios.get('https://632c5cb61aabd837399a579d.mockapi.io/practice/pins' + id)
                setData(data)
            }catch(error) {
                alert('Loading...')
                navigate('/')
            }
        }
        fetchPin()
    }, [])
    
    if(!data) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className='pinInfo'>
            <img src={data.img} alt="" />
            <div className="pinInfo__content">
                <div className="pinInfo__head">
                    i 'd add something
                </div>
                <h1 className='pinInfo__author'>No one</h1>
            </div>
        </div>
    )
}

export default PinInfo