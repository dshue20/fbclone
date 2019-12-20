import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    REMOVE_POST,
  } from '../actions/post_actions';
  import {RECEIVE_ALL_USERS} from '../actions/user_actions';
  
const postsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, action.posts.posts)
        case RECEIVE_POST:
            const id_num = Object.keys(action.post.posts)[Object.keys(action.post.posts).length-1];
            const body_val = Object.values(action.post.posts)[Object.keys(action.post.posts).length-1];
            return Object.assign({}, state, {[id_num]: body_val})
        case REMOVE_POST:
            let newState = Object.assign({}, state);
            delete newState[action.postId];
            return newState;
        case RECEIVE_ALL_USERS:
            return Object.assign({}, state, action.users.posts)
        default:
            return state;
    };
};
  
export default postsReducer;