import { Form } from 'react-bootstrap'
import './Register.css'
import { useState } from 'react'
import axios from 'axios'
import photo from '../../asset/login.png'

import { API_URL } from '../../Utils/constants'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repass, setRepass] = useState('')

    const navigate = useNavigate()

    const usernameChange = (event) => {
        setUsername(event.target.value)
    }

    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    const confirmChange = (event) => {
        setRepass(event.target.value)
    }

    const registerUser = (event) => {
        event.preventDefault()
        if (password === repass) {
            axios.post(API_URL + 'auth/register', {
                username: username,
                password: password
            })
                .then(res => {
                    console.log(res.data)
                    navigate('/Web/Login')
                })
                .catch(err => {
                    console.log(err.response.data.message)
                })
        }
    }

    return (
        <>
            <div className='form-container'>
                <div className="photo-container">
                    <img className="register-photo" src={photo} alt="" />
                </div>
                <Form onSubmit={registerUser} className='form'>
                    <Form.Group className='register-container'>
                        <h1>REGISTER</h1>
                        <Form.Control placeholder='Username' name='username' onChange={usernameChange} className='field-container' />
                        <Form.Control placeholder='Password' name='password' onChange={passwordChange} className='field-container' type='password' />
                        <Form.Control placeholder='Re-confirm password' name='confirm' onChange={confirmChange} className='field-container' type='password' />
                        <Form.Control type='submit' className='btn-submit' value='Register' />
                    </Form.Group>
                    <Form.Group className='nav-group'>
                        <div className="nav-container">
                            Back to homepage? <Link to="/Web">Homepage</Link>
                        </div>
                        <div className="nav-container">
                            Already had an account? <Link to="/Web/Login">Sign in</Link>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Login