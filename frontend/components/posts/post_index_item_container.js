import { connect } from 'react-redux';
import { createLike, fetchLikes } from '../../actions/like_actions';
import PostIndexItem from './post_index_item';

const mapStateToProps = ({entities: {likes, users}}, {post, user, today, current_user }) => {
    //debugger;
    return( 
        { post, user, today, likes, users, current_user }
    )
};

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    fetchLikes: (likeable_type, likeable_id) => dispatch(fetchLikes(likeable_type, likeable_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);