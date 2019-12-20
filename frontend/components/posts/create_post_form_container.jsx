import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state, {user}) => {
    //debugger;
    return {
        post: {
            body: '',
            user_id: user.id
        },
        user
    }
};

const mapDispatchToProps = dispatch => ({
    action: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);