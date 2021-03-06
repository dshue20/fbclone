import React from 'react';
import { connect } from 'react-redux';
import UserShow from './user_show';
import {deletePost, updatePost, fetchPosts} from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchFriendships } from '../../actions/friendship_actions';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = ({entities: {users, posts, friendships, comments}, session}, ownProps) => {
    return {
        user: users[ownProps.match.params.userId],
        posts: posts,
        current_user: users[session.id],
        friendships: friendships,
        allUsers: users,
        comments
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deletePost: postId => dispatch(deletePost(postId)),
        updatePost: post => dispatch(updatePost(post)),
        fetchPosts: () => dispatch(fetchPosts()),
        logout: () => dispatch(logout()),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchFriendships: (requestor_id, receiver_id) => dispatch(fetchFriendships(requestor_id, receiver_id)),
        fetchComments: () => dispatch(fetchComments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);