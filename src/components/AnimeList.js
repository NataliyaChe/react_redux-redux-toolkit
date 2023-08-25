// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchAnimes } from '../actions/animeListAction';

function AnimeList() {
    // const dispatch = useDispatch()
    const animes = useSelector(state => state.animes)
    // console.log('animes', animes);

    // useEffect(() => {
    //     dispatch(fetchAnimes())
    // }, [])

    return (
        <>
            <h2>Anime:</h2>
                {/* <button onClick={() => dispatch(fetchAnimes())}>Get anime</button> */}
                <div>List: {animes.map(anime =>
                    <div>{anime.mal_id}</div>)}
                </div>
        </>
    )
}

export default AnimeList