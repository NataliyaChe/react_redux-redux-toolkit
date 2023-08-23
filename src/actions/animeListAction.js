export const getAnimelist = (payload) => {
    return {
        type: 'GET_ANIMELIST',
        payload
    }
}

// It's work
// export const fetchAnimes = () => {
//     return function(dispatch) {
//         fetch('https://api.jikan.moe/v4/top/anime?length=20')
//             .then(response => response.json())
//             .then(json => dispatch(getAnimelist(json.data)))
//     }
// }

export const fetchAnimes = () => async(dispatch) => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const animes = await data.json();
        return dispatch(getAnimelist(animes))
        // return dispatch(getAnimelist(animes.data))
}


// const fetchAnimes = async () => {
//     const data = await fetch(`https://api.jikan.moe/v4/top/anime?length=20`);
//     const animes = await data.json();
//     setAnimes(animes.data)
//   }