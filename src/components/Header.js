import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userAction'

function Header() {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.currentUser)

    const logout = () => {
        dispatch(logoutUser())
        localStorage.removeItem('authorizedUser');
    }

    return (
        <div className='header'>
            <nav className='header__nav'>
                <Link to="/" className='header__title link'>Animelist</Link>
                {
                    isAuth ? 
                        <span className='link nav__link header__item' onClick={logout}>
                            Logout
                        </span> :
                    <ul className='header__list'>
                        <li className='header__item'>
                            <Link to="/" className='link nav__link'>
                                Login
                            </Link>
                        </li>
                        <li className='header__item'>
                            <Link to="/registration" className='link nav__link'>
                                Registration
                            </Link>
                        </li>
                    </ul>
                }
            </nav>
        </div>
    )
}

export default Header