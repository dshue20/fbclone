import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions';

const likesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_LIKE:
            return Object.assign({}, state, action.like);
        case RECEIVE_LIKES:
            return action.likes;
        case REMOVE_LIKE:
            let newState = Object.assign({}, state);
            delete newState[action.likeId];
            return newState;
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, action.posts.likes)
        case RECEIVE_COMMENTS:
            return Object.assign({}, state, action.comments.likes)
        default:
            return state;
    };
};

export default likesReducer;