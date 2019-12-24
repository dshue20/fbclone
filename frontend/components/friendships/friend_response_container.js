import { connect } from 'react-redux';
import { updateFriendship } from '../../actions/friendship_actions';
import FriendResponse from './friend_response';

const mapStateToProps = (state, {friendship}) => {
    return {friendship}
};

const mapDispatchToProps = dispatch => {
    return {
        updateFriendship: friendship => dispatch(updateFriendship(friendship))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendResponse);