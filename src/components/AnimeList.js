import { useDispatch, useSelector } from 'react-redux'

function AnimeList() {
    const animes = useSelector(state => state.animes.animes)

    return (
        <>
            <h2 className="subtitle">Anime:</h2>
                <div>{animes.map(anime =>
                    <div key={anime.mal_id}>{anime.title}</div>)}
                </div>
        </>
    )
}

export default AnimeList