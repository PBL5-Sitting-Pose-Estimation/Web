import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../Utils/constants"
import HistoryItem from './Item/HistoryItem'
import './History.css'
import Title from "../Components/Title/Title"
import { Outlet } from "react-router"

const History = () => {
    const [history, setHistory] = useState([])

    useEffect(() => {
        axios.get(API_URL + 'history')
            .then(res => res.data)
            .then(data => setHistory(data.data))
            .catch(err => false)
    }, [])

    return (
        <>
            <div id="hc">
                <Title />
                <div className="history-container">
                    {history.map(item => {
                        return <HistoryItem key={item._id} item={item} />
                    })}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default History