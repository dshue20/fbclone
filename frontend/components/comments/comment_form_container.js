import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, {user_id, commentable_type, commentable_id, placeholder}) => {
    //debugger;
    return { user_id, commentable_type, commentable_id, placeholder }
};

const mapDispatchToProps = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);