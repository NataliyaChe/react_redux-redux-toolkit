import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser } from '../actions/userAction'
import { useNavigate, Link } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    // const [matchUser, setMatchUser] = useState({})
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    console.log('User', currentUser);

    async function getUserByEmail(event) { 
        event.preventDefault()
        dispatch(fetchCurrentUser(userEmail))
        navigate('/')
    }

    return (
        <div class='page-container'>
            <form>
                <label for='email' className='label'>
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
                <label className='label' for='password'>
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
            </form>
        </div>
    )
}

export default Login