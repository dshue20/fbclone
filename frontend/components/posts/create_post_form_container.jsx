import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state, {user}) => {
    //debugger;
    return {
        post: {
            body: '',
            author: user.fname + ' ' + user.lname
        },
        user
        //user: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    action: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);