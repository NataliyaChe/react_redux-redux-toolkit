export const initialState = {
    animes: [],
    currentUser: JSON.parse(localStorage.getItem('authorizedUser')),
    currentPage: 1,
    totalPages: 100,
    animesPerPage: 25,
    firstItemOnPage: 0
}