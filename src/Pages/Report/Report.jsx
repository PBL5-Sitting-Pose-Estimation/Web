import './Report.css'
import Title from '../Components/Title/Title'
import { API_URL } from '../../Utils/constants'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Report = () => {
    const [time, setTime] = useState(Date.now());
    const [src, setSrc] = useState('')

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 500);
        return () => {
            clearInterval(interval);
        };
    }, []);

    axios({
        method: 'GET',
        url: API_URL + 'getimage',
        responseType: 'blob'
    }).then(res => {
        let blob = URL.createObjectURL(res.data)
        setSrc(blob)
    })

    return (
        <div>
            <Title />
            <div className='landing'>
                {time && <img src={src} className='img'></img>}
            </div>
        </div>
    )
}

export default Report