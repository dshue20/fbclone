import { connect } from 'react-redux';
import { createFriendship } from '../../actions/friendship_actions';
import FriendButton from './friend_button';

const mapStateToProps = (state, {user, current_user}) => {
    return {
        friendships: state.entities.friendships,
        user,
        current_user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createFriendship: friendship => dispatch(createFriendship(friendship))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendButton);