import { useContext, useState } from 'react'
import './UserAvatar.css'
import { AuthContext } from '../../../Context/AuthContext'

import { API_URL } from '../../../Utils/constants'
import { Link } from 'react-router-dom'

const UserAvatar = () => {
    const [visible, setVisible] = useState(false)
    const authContext = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem('accessToken')
    }

    const chageVisibility = () => {
        setVisible(!visible)
        console.log(visible)
    }


    return (
        <div className='avatar-container'>
            <img src={API_URL + 'img/avatar/' + authContext.getUser().token} className='avatar' alt='' onClick={chageVisibility}></img>
            <div className='dropdown-avatar' style={{ visibility: visible ? 'visible' : 'hidden' }}>
                <Link to='/Web/History' className='dropdown-item'>History</Link>
                <a href='' onClick={logout} className='dropdown-item'>Log Out</a>
            </div>
        </div>
    )
}

export default UserAvatar