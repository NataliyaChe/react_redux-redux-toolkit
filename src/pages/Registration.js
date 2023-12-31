import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Registration() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    function addNewUser(event) {
        event.preventDefault()
        const newUser = {
                id: Date.now(),
                name: userName,
                email: userEmail,
                password: userPassword
            }

        fetch(`http://localhost:3004/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
        navigate('/login')
    }

    return (
        <div className='page-container auth-container'>
            <form className='form'>
                <div className='form-container'>
                    <label className='label' htmlFor='username'>
                        Login
                    </label>
                    <input 
                        type='text' 
                        name='username'
                        id='username' 
                        placeholder='Your Name'
                        className='form-input' 
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <label className='label' htmlFor='email'>
                        Email
                    </label>
                    <input 
                        type='email' 
                        name='email'
                        id='email' 
                        placeholder='Your Email'
                        className='form-input'
                        value={userEmail}
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
                    <label className='label' htmlFor='password_rpt'>
                        Confirm Password
                    </label>
                    <input 
                        type='password' 
                        name='password_rpt'
                        id='password_rpt' 
                        placeholder='Repeat Password'
                        className='form-input'
                    />
                    <button type='submit' className='button' onClick={addNewUser}>
                        Register
                    </button>
                </div>
            </form>
            <div className="container-link">
                <Link to='/' className='link'>
                    Already registered? Sign in
                </Link>
            </div>
        </div>
    )
}

export default Registration