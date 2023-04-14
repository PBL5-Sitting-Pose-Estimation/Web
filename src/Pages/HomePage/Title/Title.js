import './Title.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const Title = () => {
    return (
        <div className='title'>
            <h2 className='logo'>Posee</h2>
            <Button className='camera-btn' variant='light' size='lg'>CAMERA</Button>
            <Link to='/Login'>LOGIN</Link> 
            <div style={{backgroundColor: 'black', width: '3px', height: '40px'}}></div>
            <Link to='/Register'>REGISTER</Link>
        </div>
    )
}

export default Title