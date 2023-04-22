import './Title.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'

import UserAvatar from '../UserAvatar/UserAvatar'


const Title = () => {

    const authContext = useContext(AuthContext)

    const LoginRegister = (
        <>
            <Link to='/Web/Login'>LOGIN</Link> 
            <div style={{backgroundColor: 'black', width: '3px', height: '40px'}}></div>
            <Link to='/Web/Register'>REGISTER</Link>
        </>
    )

    return (
        <div className='title'>
            <Link to='/Web' className='to-home'><h2 className='logo'>Posee</h2></Link>
            <Link to='/Web/Report' className='camera-btn-container'>
                <Button className='camera-btn' variant='light' size='lg'>CAMERA</Button>
            </Link>
            {authContext.getUser().token ? <UserAvatar /> : LoginRegister}
        </div>
    )
}

export default Title