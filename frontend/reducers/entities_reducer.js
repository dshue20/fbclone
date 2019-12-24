import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import friendshipsReducer from './friendships_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  friendships: friendshipsReducer
});

export default entitiesReducer;