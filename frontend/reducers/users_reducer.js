import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_ALL_USERS} from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign({}, state, action.users.users)
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        default:
            return state;
    }
}

export default usersReducer;