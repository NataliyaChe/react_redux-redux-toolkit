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
        const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=25`);
        const animes = await data.json();
        return dispatch(getAnimelist(animes))
}

// &page=${currentPage}

export const setCurrentPage = (currentPage) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: currentPage
    }
  }