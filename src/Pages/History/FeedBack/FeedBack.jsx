import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { API_URL } from "../../../Utils/constants"
import { Link } from "react-router-dom"
import Select from "react-select"
import { Button } from "react-bootstrap"
import axios from "axios"

var options = [
    { value: 'Gac Chan', label: 'Gac Chan' },
    { value: 'Gu lung', label: 'Gu lung' },
    { value: 'Nga lung', label: 'Nga lung' },
    { value: 'Nghieng nguoi', label: 'Nghieng nguoi' },
    { value: 'Ngoi xom', label: 'Ngoi xom' },
    { value: 'Ngu gat', label: 'Ngu gat' },
    { value: 'Thang lung', label: 'Thang lung' }
]

const FeedBack = () => {
    const [src, setSrc] = useState('')
    const param = useParams()

    useEffect(() => {
        if (document.getElementsByClassName("hc") != null) document.getElementById("hc").style.opacity = "0.5"
        axios.get(API_URL + 'history/byid/' + param.id)
        .then(res => res.data.data)
        .then(data => setSrc(data.path))
        .catch(err => false)
    })

    let component = (
        <div className="confirm-panel">
            <Link to='/Web/History' className="btn-return" onClick={() => { document.getElementById("hc").style.opacity = 1 }}>X</Link>
            <img src={API_URL + 'history/img/' + src} alt=""></img>
            <div className="form-container">
                <Select options={options}></Select>
                <Button variant="primary"> Submit</Button>
            </div>
        </div>
    )

    return (
        src && component
    )
}

export default FeedBack