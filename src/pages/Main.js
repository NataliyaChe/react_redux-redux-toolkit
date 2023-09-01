import AnimeList from "../components/AnimeList"
import Pagination from '../components/Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnimes } from '../actions/animeListAction';
import { setCurrentUser } from '../actions/userAction'

function Main() {
    const dispatch = useDispatch()
    const animes = useSelector(state => state.animes.animes)
    const currentPage = useSelector(state => state.animes.currentPage)
    const totalPages = useSelector(state => state.animes.totalPages)
    const user = useSelector(state => state.user.currentUser)
    console.log('main user', user.name);

    useEffect(() => {
        dispatch(fetchAnimes(currentPage))
        dispatch(setCurrentUser())
    }, [currentPage])

    return (
        <div className='page-container'>
            {user ? <h2>Hello, {user.name}!</h2> : <h2>{user.name}</h2> }
            <AnimeList/>
            <Pagination/>

        </div>
    )
}

export default Main