import { useEffect, useState } from "react";
import { API_URL } from '../../../Utils/constants'
import { style } from './style'

const ImageStream = () => {
    const [time, setTime] = useState(Date.now());
    const [src, setSrc] = useState('')

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(Date.now())
    //         setSrc(API_URL + "getImage?" + time)
    //     }, 1000);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [time]);

    fetch(API_URL + "getImage")
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        setSrc(url)
    });

    return (
        <div style={style.landing}>
            {/* {time && <img src={src} alt="" style={style.img}></img>} */}
            <img src={src} alt="" style={style.img}></img>
        </div>
    )
}

export default ImageStream