import { connect } from 'react-redux';
import { createLike, fetchLikes } from '../../actions/like_actions';
import { fetchComments } from '../../actions/comment_actions';
import Comment from './comment';

const mapStateToProps = ({entities: {users, likes, comments}}, {user, current_user, comment}) => {
    //debugger;
    return { users, likes, comments, user, current_user, comment }
};

const mapDispatchToProps = dispatch => {
    return {
        createLike: like => dispatch(createLike(like)),
        fetchLikes: (likeable_type, likeable_id) => dispatch(fetchLikes(likeable_type, likeable_id)),
        fetchComments: (commentable_type, commentable_id) => dispatch(fetchComments(commentable_type, commentable_id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);