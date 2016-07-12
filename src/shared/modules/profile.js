import fetch from 'isomorphic-fetch';

// Constants
const CHANGE_USER = 'CHANGE_USER';
const FETCHING_USER = 'FETCHING_USER';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

// Reducer
const initialState = {
    name: 'facebook-github-bot',
    imgUrl: '',
    followers: 0,
    isLoading: false,
    hasError: false,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case CHANGE_USER:
        return {
            ...state,
            name: action.data,
        };
    case FETCHING_USER:
        return {
            ...state,
            isLoading: true,
            hasError: false,
        };
    case FETCH_USER_SUCCESS:
        return {
            ...state,
            imgUrl: action.data.imgUrl,
            followers: action.data.followers,
            isLoading: false,
        };
    case FETCH_USER_FAILED:
        return {
            ...state,
            imgUrl: '',
            followers: 0,
            isLoading: false,
            hasError: true,
        };
    default: return state;
    }
}

// Actions
export function changeUser(newUser) {
    return {
        type: CHANGE_USER,
        data: newUser,
    };
}

export function fetchProfile(name) {
    return (dispatch) => {
        dispatch({
            type: FETCHING_USER,
        });
        fetch(`https://api.github.com/users/${name}`)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then((user) => {
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    data: {
                        imgUrl: user.avatar_url,
                        followers: user.followers,
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_USER_FAILED,
                    data: err,
                });
            });
    };
}
