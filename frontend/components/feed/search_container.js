import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = ({ entities: { users } }) => {
  //debugger;
  return {
    userNames: Object.values(users).map(user => user.fname + ' ' + user.lname),
    users
  };
};

export default connect(mapStateToProps, {})(Search);