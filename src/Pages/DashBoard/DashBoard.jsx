import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const DashBoard = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [])

    useEffect(() => {
        console.log("hello")
    })

    const action = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={action}></button>
        </div>
    )
}

export default DashBoard