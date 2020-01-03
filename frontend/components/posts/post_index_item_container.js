import { connect } from 'react-redux';
import { createLike, fetchLikes, deleteLike } from '../../actions/like_actions';
import { fetchComments } from '../../actions/comment_actions';
import PostIndexItem from './post_index_item';

const mapStateToProps = ({entities: {users, likes, comments}}, {post, user, today, current_user }) => {
    return( 
        { users, likes, comments, post, user, today, current_user }
    )
};

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    fetchLikes: (likeable_type, likeable_id) => dispatch(fetchLikes(likeable_type, likeable_id)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchComments: (commentable_type, commentable_id) => dispatch(fetchComments(commentable_type, commentable_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);