import { useContext } from 'react'
import './UserAvatar.css'
import { AuthContext } from '../../../Context/AuthContext'

const UserAvatar = () => {

    const authContext = useContext(AuthContext)

    return (
        <div>
            <img src=""></img>
        </div>
    )
}