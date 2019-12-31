import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const commentsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_COMMENT:
            return Object.assign({}, state, action.comment);
        case RECEIVE_COMMENTS:
            return action.comments;
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[action.commentId];
            return newState;
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, action.posts.comments);
        default:
            return state;
    };
};

export default commentsReducer;