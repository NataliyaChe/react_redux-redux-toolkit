import AnimeList from "../components/AnimeList"
import Pagination from '../components/Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnimes } from '../actions/animeListAction';

function Main() {
    const dispatch = useDispatch()
    const animes = useSelector(state => state.animes)
    const currentPage = useSelector(state => state.currentPage)
    console.log('animes', animes);
    const totalPages = useSelector(state => state.totalPages)
    console.log('totalPages', totalPages);

    useEffect(() => {
        dispatch(fetchAnimes())
    }, [currentPage])

    return (
        <div class='page-container'>
            <AnimeList/>
            <Pagination/>

        </div>
    )
}

export default Main