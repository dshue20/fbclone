import { RECEIVE_FRIENDSHIP, RECEIVE_ALL_FRIENDSHIPS } from '../actions/friendship_actions';

const friendshipsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_FRIENDSHIP:
            return Object.assign({}, state, action.friendship)
        case RECEIVE_ALL_FRIENDSHIPS:
            return action.friendships
            //return Object.assign({}, state, action.friendships)
        default:
            return state;
    }
};

export default friendshipsReducer;