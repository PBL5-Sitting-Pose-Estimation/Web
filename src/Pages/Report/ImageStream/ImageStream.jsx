import { useEffect, useState } from "react";
import { API_URL } from '../../../Utils/constants'
import axios from "axios";

const ImageStream = () => {
    const [time, setTime] = useState(Date.now());
    const [src, setSrc] = useState('')

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        axios({
            method: 'GET',
            url: API_URL + 'getimage',
            responseType: 'blob'
        }).then(res => {
            let blob = URL.createObjectURL(res.data)
            setSrc(blob)
        })
    }, [time])

    return (
        <div className='landing'>
            {time && <img src={src} className='img' alt=""></img>}
        </div>
    )
}

export default ImageStream