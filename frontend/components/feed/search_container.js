import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = ({ entities: { users } }, {user, current_user}) => {
  //debugger;
  return {
    userNames: Object.values(users).map(user => user.fname + ' ' + user.lname),
    users,
    user,
    current_user
  };
};

export default connect(mapStateToProps, {})(Search);