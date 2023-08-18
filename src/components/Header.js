import { Link } from 'react-router-dom'

function Header() {
    return (
        <div class='header'>
            <nav class='header__nav'>
                <Link to="/" class='header__title link'>Animelist</Link>
                <ul class='header__list'>
                    <li class='header__item'>
                        <Link to="/login" class='link nav__link'>
                            Login
                        </Link>
                    </li>
                    <li class='header__item'>
                        <Link to="/registration" class='link nav__link'>
                            Registration
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header