import { Form } from 'react-bootstrap'
import './Register.css'
import { useState } from 'react'
import axios from 'axios'

import { API_URL } from '../../Utils/constants'
import { useNavigate } from 'react-router'

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
            <h1>REGISTER</h1>
            <div className='form-container'>
                <Form onSubmit={registerUser}>
                    <Form.Group className='login-container'>
                        <Form.Control placeholder='username' name='username' onChange={usernameChange} className='username-container' />
                        <Form.Control placeholder='password' name='password' onChange={passwordChange} className='password-container' type='password' />
                        <Form.Control placeholder='re-confirm' name='confirm' onChange={confirmChange} className='re-password-container' type='password' />
                        <Form.Control type='submit' className='btn-submit' value='Register' />
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Login