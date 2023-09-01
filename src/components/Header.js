import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setCurrentUser, logoutUser } from '../actions/userAction'


function Header() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    console.log('header user', user);

    useEffect(() => {
        dispatch(setCurrentUser())
    }, [])

    function logout() {
        dispatch(logoutUser())
    }

    return (
        <div className='header'>
            <nav className='header__nav'>
                <Link to="/" className='header__title link'>Animelist</Link>
                <ul className='header__list'>
                    <li className={`header__item ${user ? 'hide' : 'show'}`}>
                        <Link to="/login" className='link nav__link'>
                            Login
                        </Link>
                    </li>
                    <li className={`header__item ${user ? 'hide' : 'show'}`}>
                        <Link to="/registration" className='link nav__link'>
                            Registration
                        </Link>
                    </li>
                    <li className={`header__item ${user ? 'show' : 'hide'}`}>
                        <Link to="/" className='link nav__link' onClick={logout()}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header