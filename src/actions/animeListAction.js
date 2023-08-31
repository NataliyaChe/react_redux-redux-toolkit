
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

export const fetchAnimes = (currentPage) => async(dispatch) => {
        const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=25&page=${currentPage}`);
        const animes = await data.json();
        console.log('animes reducer', animes);
        console.log('currentPage reducer', currentPage);
        return dispatch(getAnimelist(animes))
}

export const setCurrentPage = (currentPage) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: currentPage
    }
  }