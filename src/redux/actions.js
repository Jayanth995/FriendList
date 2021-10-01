import {ADD_FRIEND, GET_FRIENDS, ADD_FAVOURITE, DELETE_FRIEND} from './actionTypes';

export const addFriend = (name) => {
    return {
        type: ADD_FRIEND,
        payload:name
    }
}

export const addFavourite = (id) => {
    return {
        type: ADD_FAVOURITE,
        payload:id
    }
}

export const deleteFriend = (id) => {
    return {
        type: DELETE_FRIEND,
        payload:id
    }
}

export const getFriends = () => {
    return {
        type: GET_FRIENDS
    }
}