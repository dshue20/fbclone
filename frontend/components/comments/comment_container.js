import { connect } from 'react-redux';
import { createLike, fetchLikes } from '../../actions/like_actions';
import Comment from './comment';

const mapStateToProps = (state, {user, comment}) => {
    return { user, comment }
};

const mapDispatchToProps = dispatch => {
    return {
        createLike: like => dispatch(createLike(like)),
        fetchLikes: (likeable_type, likeable_id) => dispatch(fetchLikes(likeable_type, likeable_id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);