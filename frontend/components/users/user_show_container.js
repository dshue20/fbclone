import React from 'react';
import { connect } from 'react-redux';
import UserShow from './user_show';
import {deletePost, updatePost, fetchPosts} from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    //debugger;
    return {
        user: state.entities.users[ownProps.match.params.userId],
        posts: state.entities.posts,
        current_user: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    updatePost: post => dispatch(updatePost(post)),
    fetchPosts: () => dispatch(fetchPosts()),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);