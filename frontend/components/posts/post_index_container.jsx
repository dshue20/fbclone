import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchFriendships } from '../../actions/friendship_actions';

const mapStateToProps = (state, {current_user}) => {
    //debugger;
    return {
        posts: state.entities.posts,
        users: state.entities.users,
        friendships: state.entities.friendships.friendships,
        current_user
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: postId => dispatch(deletePost(postId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFriendships: () => dispatch(fetchFriendships())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);