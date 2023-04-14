import { Form } from 'react-bootstrap'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'

import { API_URL } from '../../Utils/constants'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameChange = (event) => {
        setUsername(event.target.value)
    }

    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    const loginUser = (event) => {
        event.preventDefault()
        axios.post(API_URL + 'auth/login', {
            username: username,
            password: password
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response.data.message)
        })
    }

    return (
        <>
            <h1>LOGIN</h1>
            <div className='form-container'>
                <Form onSubmit={loginUser}>
                    <Form.Group className='login-container'>
                        <Form.Control placeholder='username' name='username' onChange={usernameChange} className='username-container' />
                        <Form.Control placeholder='password' name='password' onChange={passwordChange} className='password-container' type='password'/>
                        <Form.Control type='submit' className='btn-submit' value='Login' />
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Login