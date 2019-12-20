import React from 'react';
import { connect } from 'react-redux';
import UserShow from './user_show';
import {deletePost, updatePost, fetchPosts} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    //debugger;
    return {
        user: state.entities.users[ownProps.match.params.userId],
        posts: state.entities.posts
    }
};

const mapDispatchToProps = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    updatePost: post => dispatch(updatePost(post)),
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);