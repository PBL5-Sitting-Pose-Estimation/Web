import { Form } from 'react-bootstrap'
import './Login.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import photo from '../../asset/login.png'

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
            if (loginData.success) {
                navigate("/")
            }
            else {

            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className='form-container'>
                <div className="photo-container">
                    <img className="login-photo" src={photo} alt="" />
                </div>
                <Form onSubmit={login} className='form'>
                    <h1>LOGIN</h1>
                    <Form.Group className='login-container'>
                        <Form.Control placeholder='Username' name='username' onChange={usernameChange} className='field-container' autoComplete='off' />
                        <Form.Control placeholder='Password' name='password' onChange={passwordChange} className='field-container' autoComplete='off' type='password' />
                        <Form.Control type='submit' className='btn-submit' value='Login' />
                    </Form.Group>

                    <Form.Group className='nav-group'>
                        <div className="nav-container">
                            Back to homepage? <Link to="/Web">Homepage</Link>
                        </div>
                        <div className="nav-container">
                            Don't have an account? <Link to="/Web/Register">Register</Link>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Login