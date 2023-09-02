import { useDispatch, useSelector } from 'react-redux'

function AnimeList() {
    const animes = useSelector(state => state.animes.animes)

    return (
        <>
            <h2>Anime:</h2>
                <div>List: {animes.map(anime =>
                    <div key={anime.mal_id}>{anime.title}</div>)}
                </div>
        </>
    )
}

export default AnimeList