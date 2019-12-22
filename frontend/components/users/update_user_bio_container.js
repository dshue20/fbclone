import { connect } from 'react-redux';
import UpdateUserBio from './update_user_bio';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, {user}) => {
    return {
        user
    }
};

const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserBio);