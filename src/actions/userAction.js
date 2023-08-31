export const getCurrentUser = (payload) => {
    return {
        type: 'GET_CURRENT_USER',
        payload
    }
}

export const fetchCurrentUser = (userEmail) => async(dispatch) => {
    const data = await fetch(`http://localhost:3004/users?email=${userEmail}`);
    const user = await data.json();
    localStorage.setItem('authorizedUser', JSON.stringify(user))
    return dispatch(getCurrentUser(user))
}

