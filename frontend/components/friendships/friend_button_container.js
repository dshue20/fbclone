import { connect } from 'react-redux';
import { createFriendship, updateFriendship } from '../../actions/friendship_actions';
import FriendButton from './friend_button';

const mapStateToProps = (state, {user, current_user, friendships}) => {
    return {
        friendships,
        user,
        current_user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createFriendship: friendship => dispatch(createFriendship(friendship)),
        updateFriendship: friendship => dispatch(updateFriendship(friendship))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendButton);