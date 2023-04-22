import { useEffect } from "react"
import { useNavigate } from "react-router"

const Loader = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        navigate('/Web')
    })

    return(
        <>OK</>
    )
}

export default Loader