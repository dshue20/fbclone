import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Feed from './feed';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    user: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);