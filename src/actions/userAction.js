export const getCurrentUser = (payload) => {
    return {
        type: 'GET_CURRENT_USER',
        payload
    }
}

export const fetchCurrentUser = (userEmail) => async(dispatch) => {
    const data = await fetch(`http://localhost:3004/users?email=${userEmail}`);
    const user = await data.json();
    localStorage.setItem('authorizedUser', JSON.stringify(user[0]))
    return dispatch(getCurrentUser(user[0]))
}

export const setCurrentUser = () => {
    return {
        type: 'SET_CURRENT_USER',
        payload: JSON.parse(localStorage.getItem('authorizedUser'))
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT',
        payload: null
    }
}
