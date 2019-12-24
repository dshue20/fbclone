import React from 'react';
import { connect } from 'react-redux';
import UserShow from './user_show';
import {deletePost, updatePost, fetchPosts} from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchFriendships } from '../../actions/friendship_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        posts: state.entities.posts,
        current_user: state.entities.users[state.session.id],
        friendships: state.entities.friendships
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deletePost: postId => dispatch(deletePost(postId)),
        updatePost: post => dispatch(updatePost(post)),
        fetchPosts: () => dispatch(fetchPosts()),
        logout: () => dispatch(logout()),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchFriendships: (requestor_id, receiver_id) => dispatch(fetchFriendships(requestor_id, receiver_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);