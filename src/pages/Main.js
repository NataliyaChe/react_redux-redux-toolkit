import AnimeList from "../components/AnimeList"
import Pagination from '../components/Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnimes } from '../actions/animeListAction';

function Main() {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.animes.currentPage)
    const user = useSelector(state => state.user.currentUser)

    useEffect(() => {
        dispatch(fetchAnimes(currentPage))
    }, [currentPage, dispatch])

    return (
        <div className='page-container'>
            <h2 className="title">Hello, {user.name}!</h2>
            <AnimeList/>
            <Pagination/>
        </div>
    )
}

export default Main