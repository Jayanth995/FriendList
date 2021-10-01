import { ADD_FAVOURITE, ADD_FRIEND, DELETE_FRIEND } from './actionTypes';

const initialState = {
    friendsList: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND: return {
            ...state,
            friendsList: [...state.friendsList,action.payload]
        }

        case ADD_FAVOURITE: {
            let newArray = [...state.friendsList];
            newArray.find(elem => elem.id == action.payload).fav = !newArray.find(elem => elem.id == action.payload).fav;
            return {
                ...state,
                friendsList: newArray
            }
        }

        case DELETE_FRIEND: {
            let newArray = [...state.friendsList];
            let index = newArray.indexOf(newArray.find(elem => elem.id == action.payload));
            newArray.splice(index,1); 
            return {
                ...state,   
                friendsList: newArray
            }
        }

        default: return state
    }
}

export default rootReducer;