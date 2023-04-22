import { useContext } from 'react'
import './UserAvatar.css'
import { AuthContext } from '../../../Context/AuthContext'

import { API_URL } from '../../../Utils/constants'

const UserAvatar = () => {

    const authContext = useContext(AuthContext)

    return (
        <div>
            <img src={ API_URL + 'img/avatar/' + authContext.getUser().token } className='avatar'></img>
        </div>
    )
}

export default UserAvatar