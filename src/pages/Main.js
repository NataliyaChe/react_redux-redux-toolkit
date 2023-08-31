import AnimeList from "../components/AnimeList"
import Pagination from '../components/Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnimes } from '../actions/animeListAction';

function Main() {
    const dispatch = useDispatch()
    const animes = useSelector(state => state.animes.animes)
    const currentPage = useSelector(state => state.animes.currentPage)
    console.log('animes', animes);
    const totalPages = useSelector(state => state.animes.totalPages)
    console.log('totalPages', totalPages);

    useEffect(() => {
        dispatch(fetchAnimes(currentPage))
    }, [currentPage])

    return (
        <div className='page-container'>
            <AnimeList/>
            <Pagination/>

        </div>
    )
}

export default Main