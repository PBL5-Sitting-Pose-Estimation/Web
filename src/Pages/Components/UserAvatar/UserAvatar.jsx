import { useContext } from 'react'
import './UserAvatar.css'
import { AuthContext } from '../../../Context/AuthContext'

import { API_URL } from '../../../Utils/constants'

const UserAvatar = () => {

    const authContext = useContext(AuthContext)

    return (
        <div className='avatar-container'>
            <img src={ API_URL + 'img/avatar/' + authContext.getUser().token } className='avatar' alt=''></img>
            <div className='dropdown-avatar'>
                <a href='' onClick={authContext.logout()} className='dropdown-item'>Log Out</a>
            </div>
        </div>
    )
}

export default UserAvatar