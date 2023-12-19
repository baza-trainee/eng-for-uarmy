export const selectIsLoggedIn = state => {
    return state.auth.isLoggedIn
};

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;