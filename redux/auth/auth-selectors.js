export const selectIsLoggedIn = state => {
    console.log('state.auth.isLoggedIn', state.auth.isLoggedIn);
    return state.auth.isLoggedIn
};

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;