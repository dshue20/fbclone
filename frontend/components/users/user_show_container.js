import React from 'react';
import { connect } from 'react-redux';
import UserShow from './user_show';
import {deletePost, updatePost} from '../../actions/post_actions';

const mapStateToProps = state => {
    //debugger;
    return {
        user: state.entities.user,
        posts: state.entities.posts
    }
};

const mapDispatchToProps = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    updatePost: post => dispatch(updatePost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);