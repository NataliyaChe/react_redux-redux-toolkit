import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrentUser } from '../actions/userAction'
import { Link } from 'react-router-dom'

function Login() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const dispatch = useDispatch()

    async function getUserByEmail(event) { 
        event.preventDefault()
        dispatch(fetchCurrentUser(userEmail))
    }

    return (
        <div className='page-container auth-container'>
            <form>
                <div className='form-container'>
                    <label htmlFor='email' className='label'>
                        Email
                    </label>
                    <input 
                        type='email' 
                        name='email'
                        id='email' 
                        placeholder='Your Email'
                        value={userEmail} 
                        className='form-input'
                        onChange={(event) => setUserEmail(event.target.value)}
                    />
                    <label className='label' htmlFor='password'>
                        Password
                    </label>
                    <input 
                        type='password' 
                        name='password'
                        id='password' 
                        placeholder='Password'
                        className='form-input'
                        value={userPassword}
                        onChange={(event) => setUserPassword(event.target.value)}
                    />
                    <button className='button' onClick={getUserByEmail}>
                        Login
                    </button>
                </div>
            </form>
            <div className="container-link">
                <Link to='/registration' className='link'>
                    Not registered?
                </Link>
            </div>
        </div>
    )
}

export default Login