import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state, {current_user, user}) => {
    //debugger;
    return {
        post: {
            body: '',
            user_id: current_user.id,
            receiver_id: 0
        },
        current_user,
        user
    }
};

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);