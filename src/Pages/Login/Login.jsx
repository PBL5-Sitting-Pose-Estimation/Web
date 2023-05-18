import { Form } from 'react-bootstrap'
import './Login.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = () => {
    const authContext = useContext(AuthContext)

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const usernameChange = (event) => {
        setUsername(event.target.value)
    }

    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    const login = async (event) => {
        event.preventDefault()
        
        try {
            const loginData = await authContext.loginUser(username, password);
            console.log(loginData);
            if(loginData.success){
                navigate("/")
            }
            else{

            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h1>LOGIN</h1>
            <div className='form-container'>
                <Form onSubmit={login}>
                    <Form.Group className='login-container'>
                        <Form.Control placeholder='username' name='username' onChange={usernameChange} className='username-container' autoComplete='off'/>
                        <Form.Control placeholder='password' name='password' onChange={passwordChange} className='password-container' autoComplete='off' type='password' />
                        <Form.Control type='submit' className='btn-submit' value='Login' />
                    </Form.Group>
                </Form>
                <Link to="/">Quay lại trang chủ</Link>
                <Link to="/Register">Đăng kí</Link>
            </div>
        </>
    )
}

export default Login